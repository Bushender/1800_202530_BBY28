import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const db = getFirestore();

/**
 * Loads the user's classes and renders them in a table.
 * @param {string} userId  // THIS IS NOW A STRING (uid)
 */
async function loadSchedule(userId) {
  try {
    // --- 1. Get the user document to read their set ---
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      console.error("User document does not exist.");
      return;
    }

    const userData = userSnap.data();
    const userSet = userData.set; // e.g. "setA"

    if (!userSet) {
      console.error("User has no assigned set (A–D).");
      return;
    }

    // --- 2. Read the schedule for that set ---
    const classCollectionRef = collection(db, "schedules", userSet, "Class");
    const classSnapshots = await getDocs(classCollectionRef);

    // --- 3. Build the HTML table ---
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

    classSnapshots.forEach((docSnap) => {
      const c = docSnap.data();
      const className = docSnap.id;

      html += `
        <tr>
          <td>${className}</td>
          <td>${c.start || ""}</td>
          <td>${c.end || ""}</td>
          <td>${c.duration || ""}</td>
          <td>${c.room || ""}</td>
          <td>${c.type || ""}</td>
        </tr>
      `;
    });

    html += `</tbody></table>`;

    document.getElementById("scheduleTable").innerHTML = html;
  } catch (err) {
    console.error("Error loading schedule:", err);
  }
}

onAuthStateChanged(getAuth(), (user) => {
  if (user) {
    loadSchedule(user.uid);
  } else {
    console.log("No user logged in");
  }
});
