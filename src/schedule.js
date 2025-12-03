import { db, auth } from "./firebaseConfig.js";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

/* FIXED TIME LABELS FOR TABLES well not fixed fixed if smth is to be added go ahead */
const TIME_SLOTS = [
  "08:30",
  "10:20",
  "10:30",
  "12:20",
  "13:30",
  "14:20",
  "14:30",
  "15:20",
  "15:30",
  "16:20",
  "16:30",
  "17:20",
];

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];

/* Convert "1430" to "14:30" for table display */
function formatTime(t) {
  t = t.toString().padStart(4, "0");

  const h = t.slice(0, 2);
  const m = t.slice(2);

  return `${h}:${m}`;
}

/* Build table */
function buildGrid() {
  let html = `
    <table id="scheduleGrid">
      <thead>
        <tr>
          <th>Time</th>
          ${DAYS.map((d) => `<th>${d}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
  `;

  /*The following section is literal hell of building a table row by row */
  /* For each time slot, create a row */
  TIME_SLOTS.forEach((label) => {
    html += `
      <tr>
        <td>${label}</td>
        ${DAYS.map(
          (day) =>
            `<td class="day-td" data-day="${day}" data-time="${label}"></td>`
        ).join("")}
      </tr>
    `;
  });

  html += `
      </tbody>
    </table>
  `;

  document.getElementById("scheduleTable").innerHTML = html;
}

/* Insert class text */
function insertClass(day, startRaw, label) {
  // format the time
  const startFormatted = formatTime(startRaw);

  /* Find cell and insert */
  const cell = document.querySelector(
    `td.day-td[data-day="${day}"][data-time="${startFormatted}"]`
  );

  if (cell) {
    cell.textContent = label;
  } else {
    console.warn("Could not place class:", label, "→", startFormatted);
  }
}

/* Load schedule */
async function loadSchedule(uid) {
  const snap = await getDoc(doc(db, "users", uid));
  const setName = "set" + snap.data().set.slice(-1).toUpperCase();

  buildGrid();

  const classSnaps = await getDocs(
    collection(db, "schedules", setName, "Class")
  );

  /* For each class, insert into table */
  classSnaps.forEach((docSnap) => {
    const data = docSnap.data();
    const classId = docSnap.id.split("_")[0];
    const label = `${classId} ${data.type}`;

    /* For each day, insert into table */
    Object.entries(data.days).forEach(([day, info]) => {
      insertClass(day, info.start, label);
    });
  });
}

onAuthStateChanged(auth, (user) => {
  if (user) loadSchedule(user.uid);
});
