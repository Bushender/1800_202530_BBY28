//database imports
import { auth } from "/src/firebaseConfig.js";
import { db } from "/src/firebaseConfig.js";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";










function createAssignmentBox() {
  // Outer container box
  const container = document.createElement('div');
  container.style.backgroundColor = "darkblue";
  container.style.marginLeft = "25%";
  container.style.marginBottom = "20px";
  container.style.width = "60%";
  container.style.height = "40px";
  container.style.border = "3px solid yellow";
  container.style.borderRadius = "8px";
  container.style.padding = "2%";
  container.style.alignItems = "center";
  container.style.display = "flex";
  container.style.justifyContent = "space-evenly";
  container.style.marginTop = "30px";


  // Row wrapper
  const row = document.createElement('div');
  row.className = "row";

  // Columns
  const leftColumn = document.createElement('div');
  leftColumn.className = "column";

  const rightColumn = document.createElement('div');
  rightColumn.className = "column";

  // Form
  const form = document.createElement('form');

  // Inputs
  const inputClass = document.createElement('input');
  inputClass.type = "text";
  inputClass.name = "class";
  inputClass.id = "classInput";
  inputClass.placeholder = "Enter Class";
  inputClass.style.height = "40px";
  inputClass.style.borderRadius = "8px";
  inputClass.style.borderWidth = "5px";
  inputClass.style.borderColor = "yellow";

  const inputAssignment = document.createElement('input');
  inputAssignment.type = "text";
  inputAssignment.name = "assignment";
  inputAssignment.id = "assignmentInput";
  inputAssignment.placeholder = "Enter Assignment";
  inputAssignment.style.height = "40px";
  inputAssignment.style.borderRadius = "8px";
  inputAssignment.style.borderWidth = "5px";
  inputAssignment.style.borderColor = "yellow";

  const inputDate = document.createElement('input');
  inputDate.type = "date";
  inputDate.name = "dueDate";
  inputDate.id = "dateInput";
  inputDate.placeholder = "Enter Due Date";
  inputDate.style.height = "40px";
  inputDate.style.borderRadius = "8px";
  inputDate.style.borderWidth = "5px";
  inputDate.style.borderColor = "yellow";

  // Button
  const submitButton = document.createElement('button');
  submitButton.type = "submit";
  submitButton.style.height = "30px";
  submitButton.style.width = "30px";
  submitButton.id = "submitAssignment";
  submitButton.addEventListener("click", () => {
    submitAssignment(
      inputAssignment.value,
      inputClass.value,
      inputDate.value,
     // user.uid
    );
  });

  // Image (icon)
  const icon = document.createElement('img');
  icon.src = "https://th.bing.com/th/id/R.63c76d3796708a94e97fff91e07ca726?rik=gVd3cN4Xx%2f7tCg&pid=ImgRaw&r=0";
  icon.style.height = "40px";
  icon.style.width = "40px";

  // Build the structure
  leftColumn.appendChild(inputClass);
  leftColumn.appendChild(inputAssignment);

  rightColumn.appendChild(inputDate);
  rightColumn.appendChild(icon);
  rightColumn.appendChild(submitButton);

  row.appendChild(leftColumn);
  row.appendChild(rightColumn);

  container.appendChild(row);
  document.body.appendChild(container);
}

// Handles Firestore submission

let currentUser = null;

onAuthStateChanged(auth, (user) => {
  currentUser = user;
});




function submitAssignment(assignmentName, assignmentClass, assignmentDate) {
  try {
    setDoc(doc(db, "UserAssignment", user.uid), {//
      name: "Heinz Klinger",
      assignmentName,
      assignmentClass,
      assignmentDate,
    });
  } catch (error) {
    console.error("Error creating user document in Firestore:", error);
  }

  return " ";
}

const boxMaker = document.querySelector('#suffer');
boxMaker; {
boxMaker.addEventListener("click", () => {
createAssignmentBox()


})
}