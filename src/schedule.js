import { db, auth } from "./firebaseConfig.js";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

/* FIXED TIME LABELS FOR TABLES well not fixed fixed if smth is to be added go ahead */
const TIME_SLOTS = [
  "08:30",
  "09:30",
  "10:20",
  "10:30",
  "11:30",
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

/* Converts time to proper format -> "1430" to "14:30" for table display */
function formatTime(t) {
  t = t.toString().padStart(4, "0");

  const h = t.slice(0, 2);
  const m = t.slice(2);

  return `${h}:${m}`;
}

<<<<<<< HEAD



const db = getFirestore();

/**
 * Loads the user's classes and renders them in a table.
 * @param {string} userId
 */
async function loadSchedule(userId) {
  try {
    // --- 1. Get the user's schedule document ---
    const schedRef = doc(db, "schedules", "setA");  //before -> userID, change to set A -> check if set a exists, always runs
    const schedSnap = await getDoc(schedRef);

    if (!schedSnap.exists()) {
      console.error("No schedule document found for this user");
      return;
    }

    const data = schedSnap.data();

    // --- 2. Determine which set the user is in (setA–setD) ---
    const sets = ["setA", "setB", "setC", "setD"];
const userSet = sets.includes(data.set) ? data.set : "setD";

    if (!userSet) {
      console.error("User does not belong to any set (setA–setD).");
      return;
    }

   // console.log("User belongs to:", userSet);

    // --- 3. Get the class subcollection for this set ---
    // Path: schedules/{userId}/{userSet}/class/*
    const classCollectionRef = collection(db, "schedules", userSet, "Class");
    const classSnapshots = await getDocs(classCollectionRef);
   

    // --- 4. Build the HTML table ---
    let html = `
      <table>
          <tr>
            <th>Class Name</th>
            <th>Start</th>
            <th>End</th>
            <th>Duration</th>
            <th>Room</th>
            <th>Type</th>
          </tr>
        <tbody>
    `;

    classSnapshots.forEach(docSnap => {
      const c = docSnap.data();
        const className = docSnap.id;
      html += `
        <tr id = "theRow">
          <td>${className || ""}</td>
          <td>${c.start || ""}</td>
          <td>${c.end || ""}</td>
          <td>${c.duration || ""}</td>
          <td>${c.room || ""}</td>
          <td>${c.type || ""}</td>
=======
/* Build table */
function buildGrid() {
  let html = `
    <table id="scheduleGrid">
      <thead>
        <tr>
          <th>Time</th>
          ${DAYS.map((d) => `<th>${d}</th>`).join("")}
>>>>>>> main
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
    cell.classList.add("classBG");
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
