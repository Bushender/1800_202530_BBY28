import { db } from "/src/firebaseConfig.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  query,
  where,
} from "firebase/firestore";

onAuthStateChanged(getAuth(), (user) => {
  if (user) {
    // user is signed in
    loadAssignments(user);
  } else {
    // user is not signed in
    console.log("No user logged in");
  }
});

const add = document.getElementById("addButton");
const assignmentForm = document.getElementById("assignmentForm");
const create = document.getElementById("createBtn");
const cancel = document.getElementById("cancelBtn");
const overlay = document.getElementById("overlay");

function closeForm() {
  assignmentForm.style.display = "none";
  overlay.style.display = "none";
}

add.addEventListener("click", () => {
  assignmentForm.style.display = "flex";
  overlay.style.display = "block";
});

create.addEventListener("click", async () => {
  const user = getAuth().currentUser;

  const className = document.getElementById("className").value;
  const name = document.getElementById("assignmentName").value;
  const dueDate = document.getElementById("dueDate").value;

  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);
  const set = userSnap.data().set;

  await addDoc(collection(db, "assignments"), {
    className,
    name,
    dueDate,
    set,
  });

  closeForm();
  loadAssignments(user);
});

async function loadAssignments(user) {
  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);
  const set = userSnap.data().set;

  const container = document.getElementById("assignmentContainer");
  container.innerHTML = "";

  // finds and gets the assignments with the same set as the user
  const q = query(collection(db, "assignments"), where("set", "==", set));
  const setAssignments = await getDocs(q);

  setAssignments.forEach((assignment) => {
    const data = assignment.data();
    const newAssignment = document.createElement("div");
    newAssignment.classList.add("assignmentItem");
    newAssignment.innerHTML = `
    <div class="top">${data.className}
      <button class="menu" type="button">
        <img src="images/dots.png" alt="menu" class="dots">
      </button>
    </div>
    <div class="bottom">${data.name}
    <span>Due: ${data.dueDate}</span>
    </div>
    `;
    container.appendChild(newAssignment);
  });
}

cancel.addEventListener("click", closeForm);

// menubar.addEventListener("click", () => {
//   //
// });
