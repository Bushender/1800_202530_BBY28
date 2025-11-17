import { db } from "/src/firebaseConfig.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
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

const editForm = document.getElementById("editForm");
const cancelEdit = document.getElementById("editCancelBtn");
const container = document.getElementById("assignmentContainer");

let currentAssignmentID = null;

cancel.addEventListener("click", closeForm);

cancelEdit.addEventListener("click", closeForm);

deleteBtn.addEventListener("click", async () => {
  await deleteDoc(doc(db, "assignments", currentAssignmentID));
  loadAssignments(getAuth().currentUser);
  closeForm();
});

function closeForm() {
  assignmentForm.style.display = "none";
  editForm.style.display = "none";
  overlay.style.display = "none";
}

// Opens the create form
add.addEventListener("click", () => {
  assignmentForm.style.display = "flex";
  overlay.style.display = "block";
});

// The create assignment form and sending it to firebase
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

// Loading all set assignments to assignments page
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
    newAssignment.dataset.id = assignment.id;

    newAssignment.innerHTML = `
    <div class="checkboxContainer">
      <input class="checkbox" type="checkbox" id="check-${assignment.id}">
      <label class="circle" for="check-${assignment.id}"></label>
    </div>

    <div class="assignmentBox">
      <div class="top">${data.className}
        <button class="editBtn">
          <img src="images/edit_icon.png" alt="menu" class="edit">
        </button>
      </div>
      <div class="bottom">${data.name}
      <span class="dueDate">${data.dueDate}</span>
      </div>
    </div>
    `;

    container.appendChild(newAssignment);
  });
}

// menu control (edit, delete, save edit)
container.addEventListener("click", async (e) => {
  const target = e.target;
  const assignment = target.closest(".assignmentItem");
  if (!assignment) {
    return;
  }
  const assignmentID = assignment.dataset.id;

  if (target.closest(".editBtn")) {
    currentAssignmentID = assignmentID;

    const className = document.getElementById("classEdit");
    const name = document.getElementById("assignmentEdit");
    const dueDate = document.getElementById("dateEdit");

    const docRef = doc(db, "assignments", assignmentID);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();

    editForm.style.display = "flex";
    overlay.style.display = "block";

    className.value = data.className;
    name.value = data.name;
    dueDate.value = data.dueDate;

    document.getElementById("saveBtn").onclick = async () => {
      const classValue = className.value;
      const assignmentValue = name.value;
      const dateValue = dueDate.value;
      const docRef = doc(db, "assignments", assignmentID);

      await updateDoc(docRef, {
        className: classValue,
        name: assignmentValue,
        dueDate: dateValue,
      });

      closeForm();
      loadAssignments(getAuth().currentUser);
    };
  }
});
