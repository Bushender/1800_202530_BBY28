//database imports
import { auth } from "/src/firebaseConfig.js";
import { db } from "/src/firebaseConfig.js";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

// back button so fire
const backButton = document.querySelector(".back-btn");
if (backButton) {
  backButton.addEventListener("click", () => {
    window.history.back();
  });
}

const profilePic = document.querySelector(".profile-pic");
const profilePicInput = document.getElementById("profile-pic-input");

if (profilePic && profilePicInput) {
  profilePic.addEventListener("click", () => {
    profilePicInput.click();
  });

  file.input.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        profilePic.style.backgroundImage = `url(${e.target.result})`;
        profilePic.style.backgroundSize = "cover";
        profilePic.style.backgroundPosition = "center";
      };
      reader.readAsDataURL(file);
    }
  });
}

const navButtons = document.querySelectorAll(".nav-button");
const editBtn = document.querySelector(".edit-btn");
const saveBtn = document.querySelector(".save-btn");
const inputs = document.querySelectorAll(
  ".account-form input, .account-form select"
);

// locking the forms hahah
inputs.forEach((input) => (input.disabled = true));

// enable them on edit
editBtn.addEventListener("click", () => {
  inputs.forEach((input) => (input.disabled = false));
  editBtn.style.display = "none";
  saveBtn.style.display = "inline-flex";
});

// show which nav you're on so cool
navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    navButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

//This is for save button so that it works correctly
saveBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  await saveUserInfo();

  // Lock inputs again
  inputs.forEach((input) => (input.disabled = true));
  saveBtn.style.display = "none";
  editBtn.style.display = "inline-flex";
});

//populating the forms

function populateUserInfo() {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const {
            set = "",
            email = "",
            name = "",
            displayName = "",
          } = userSnap.data();

          document.getElementById("email").value = email;
          document.getElementById("username").value = name;
          document.getElementById("display-name").value = displayName;
          document.getElementById("set").value = set || "Select";
        } else {
          console.log("No user document found for this account.");
        }
      } catch (error) {
        console.error("Error fetching user document:", error);
      }
    } else {
      console.log("No user is signed in.");
    }
  });
}

// Saving user data to firestore

async function saveUserInfo() {
  const user = auth.currentUser;
  if (!user) {
    console.error("No user signed in. Cannot save.");
    return;
  }

  try {
    const userRef = doc(db, "users", user.uid);
    const updatedData = {
      set: document.getElementById("set").value,
      email: document.getElementById("email").value,
      displayName: document.getElementById("display-name").value,
      name: document.getElementById("username").value,
    };

    await setDoc(userRef, updatedData, { merge: true });
    console.log("User data successfully saved:", updatedData);
  } catch (error) {
    console.error("Error saving user data:", error);
  }
}

populateUserInfo();
