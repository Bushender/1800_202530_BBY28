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
<<<<<<< HEAD
 * @param {string} userId  // THIS IS NOW A STRING (uid)
=======
>>>>>>> main
 */
async function loadSchedule() {
  try {
<<<<<<< HEAD
    // --- 1. Get the user document to read their set ---
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
=======
    // --- 1. Get the user's schedule document ---
    const schedRef = doc(db, "schedules", "setA"); //before -> userID, change to set A -> check if set a exists, always runs
    const schedSnap = await getDoc(schedRef);
>>>>>>> main

    if (!userSnap.exists()) {
      console.error("User document does not exist.");
      return;
    }

<<<<<<< HEAD
    const userData = userSnap.data();
    const userSet = userData.set; // e.g. "setA"
=======
    const data = schedSnap.data();

    // --- 2. Determine which set the user is in (setA–setD) ---
    const sets = ["setA", "setB", "setC", "setD"];
    const userSet = sets.includes(data.set) ? data.set : "setD";
>>>>>>> main

    if (!userSet) {
      console.error("User has no assigned set (A–D).");
      return;
    }

<<<<<<< HEAD
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
=======
    console.log(userSet);

    // --- 3. Get the class subcollection for this set ---
    // Path: schedules/{userId}/{userSet}/class/*
    const classCollectionRef = collection(db, "schedules", userSet, "setA");
    const classSnapshots = await getDocs(classCollectionRef);

    // --- 4. Build the HTML table ---
    let table = `
      <table id="scheduleContent">
          <tr>
            <th>Time</th>
            <th>Mon</th>
            <th>Tues</th>
            <th>Wed</th>
            <th>Thur</th>
            <th>Fri</th>
          </tr>
>>>>>>> main
        <tbody>
    `;

    classSnapshots.forEach((docSnap) => {
      const c = docSnap.data();
      const className = docSnap.id;
<<<<<<< HEAD

      html += `
=======
      table += `
>>>>>>> main
        <tr>
          <td>${className}</td>
          <td>${c.start || ""}</td>
          <td>${c.end || ""}</td>
          <td>${c.Duration || ""}</td>
          <td>${c.room || ""}</td>
          <td>${c.type || ""}</td>
        </tr>
      `;
    });

<<<<<<< HEAD
    html += `</tbody></table>`;

    document.getElementById("scheduleTable").innerHTML = html;
=======
    table += `
        </tbody>
      </table>
    `;

    // --- 5. Write to the page ---
    document.getElementById("scheduleTable").innerHTML = table;
>>>>>>> main
  } catch (err) {
    console.error("Error loading schedule:", err);
  }
}

onAuthStateChanged(getAuth(), (user) => {
  if (user) {
<<<<<<< HEAD
    loadSchedule(user.uid);
=======
    // user is signed in
    const userRef = doc(db, "users", user.uid); //get uid
    loadSchedule(userRef); //user id not id-ing
>>>>>>> main
  } else {
    console.log("No user logged in");
  }
});
