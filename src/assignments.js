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
  arrayUnion,
  arrayRemove,
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

// constants used to load/track all the buttons and append html
const add = document.getElementById("addButton");
const assignmentForm = document.getElementById("assignmentForm");
const create = document.getElementById("createBtn");
const cancel = document.getElementById("cancelBtn");
const overlay = document.getElementById("overlay");

const editForm = document.getElementById("editForm");
const cancelEdit = document.getElementById("editCancelBtn");
const container = document.getElementById("assignmentContainer");
const deleteBtn = document.getElementById("deleteBtn");

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
  const dueDate = document.getElementById("dueDate").value.trim();

  // Validate input date
  if (!isValidDate(dueDate)) {
    alert("Please enter a valid date in YYYY-MM-DD format.");
    return;
  }

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

// Toggles whether an assignment is in the done array or not
async function toggleDone(id, isChecked) {
  const user = getAuth().currentUser;
  const userRef = doc(db, "users", user.uid);

  if (isChecked) {
    await updateDoc(userRef, { done: arrayUnion(id) });
  } else {
    await updateDoc(userRef, { done: arrayRemove(id) });
  }
}

// Renders an assignment
function renderAssignment(id, data, isDone = false) {
  const newAssignment = document.createElement("div");

  newAssignment.classList.add("assignmentItem");
  newAssignment.dataset.id = id;

  if (isDone) newAssignment.classList.add("assignment-done");

  newAssignment.innerHTML = `
    <div class="checkboxContainer">
      <input class="checkbox" type="checkbox" id="check-${id}">
      <label class="circle" for="check-${id}"></label>
    </div>

    <div class="assignmentBox">
      <div class="top">${data.name}
        <button class="editBtn">
          <img src="images/edit_icon.png" alt="menu" class="edit">
        </button>
      </div>
      <div class="bottom">${data.className}
      <span class="dueDate">${data.dueDate}</span>
      </div>
    </div>
    `;

  container.appendChild(newAssignment);

  const checkbox = newAssignment.querySelector(".checkbox");
  checkbox.checked = isDone;
  checkbox.addEventListener("change", async (e) => {
    await toggleDone(id, e.target.checked);
    loadAssignments(getAuth().currentUser);
  });
}

// Loading all set assignments to assignments page
async function loadAssignments(user) {
  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);
  const set = userSnap.data().set;

  // Ensures that the user already has a "done" array
  if (!userSnap.data().done) {
    await updateDoc(userRef, { done: [] });
  }
  const done = userSnap.data().done;

  // finds and gets the assignments with the same set as the user
  const q = query(collection(db, "assignments"), where("set", "==", set));
  const setAssignments = await getDocs(q);

  let doneAssignments = [];
  let notDoneAssignments = [];

  // Check if the assignemnt is marked as "done" for the user
  // and add it to the corresponding array
  setAssignments.forEach((assignment) => {
    if (done.includes(assignment.id)) {
      doneAssignments.push(assignment);
    } else {
      notDoneAssignments.push(assignment);
    }
  });

  const container = document.getElementById("assignmentContainer");
  container.innerHTML = "";

  // Checks if any assignments even exist
  // If not, load html saying there aren't any
  // If yes, then load the uncomplete assignments first
  if (doneAssignments.length == 0 && notDoneAssignments.length == 0) {
    container.innerHTML = `
    <div id="noneBox">
      <h1 id="noneText">No assignments have been added yet.</h1>
    </div>
    `;
  } else {
    notDoneAssignments.forEach((assignment) =>
      renderAssignment(assignment.id, assignment.data())
    );

    doneAssignments.forEach((assignment) =>
      renderAssignment(assignment.id, assignment.data(), true)
    );
  }
}

//Validates date input in YYYY-MM-DD format
function isValidDate(dateString) {
  // Must be exactly YYYY-MM-DD yes i used a regex yes we learnt in java what regex are
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateString)) return false;

  const [year, month, day] = dateString.split("-").map(Number);

  // Month must be 1–12
  if (month < 1 || month > 12) return false;

  // Day must be 1–31
  if (day < 1 || day > 31) return false;

  // Create date
  const actual = new Date(year, month - 1, day);

  // Make sure that the year month and day will be correct
  return (
    actual.getFullYear() === year &&
    actual.getMonth() === month - 1 &&
    actual.getDate() === day
  );
}

// menu control (edit, save edit)
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
      const dateValue = dueDate.value.trim();

      // Validate input date
      if (!isValidDate(dateValue)) {
        alert("Please enter a valid date in YYYY-MM-DD format.");
        return;
      }

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
