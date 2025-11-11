import { auth } from "/src/firebaseConfig.js";
import { db } from "/src/firebaseConfig.js";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const add = document.getElementById("addButton");
const assignmentForm = document.getElementById("assignmentForm");
const className = document.getElementById("className");
const name = document.getElementById("assignmentName");
const dueDate = document.getElementById("dueDate");
const create = document.getElementById("createBtn");
const cancel = document.getElementById("cancelBtn");
const overlay = document.getElementById("overlay");

add.addEventListener("click", () => {
  assignmentForm.style.display = "flex";
  overlay.style.display = "block";
});

create.addEventListener("click", () => {
  assignmentForm.style.display = "none";
  overlay.style.display = "none";
});

cancel.addEventListener("click", () => {
  assignmentForm.style.display = "none";
  overlay.style.display = "none";
});
