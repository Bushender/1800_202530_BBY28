
import { getFirestore, doc, getDoc, collection, getDocs, documentId, DocumentReference } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";








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
        </tr>
      `;
    });

    html += `
        </tbody>
      </table>
    `;

    // --- 5. Write to the page ---
    document.getElementById("scheduleTable").innerHTML = html;

  } catch (err) {
    console.error("Error loading schedule:", err);
  }
}

onAuthStateChanged(getAuth(), (user) => {
  if (user) {
    // user is signed in
     const userRef = doc(db, "users", user.uid); //get uid
    loadSchedule(userRef); //user id not id-ing

  } else {
    // user is not signed in
    console.log("No user logged in");
  }
});
