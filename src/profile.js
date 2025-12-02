//database imports
import { auth } from "/src/firebaseConfig.js";
import { db } from "/src/firebaseConfig.js";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

// back button
const backButton = document.querySelector(".back-btn");
if (backButton) {
  backButton.addEventListener("click", () => {
    window.history.back();
  });
}

// profile picture upload logic

const profilePic = document.querySelector(".profile-pic");
const profilePicInput = document.getElementById("profile-pic-input");

// an even listener for clicking the profile
if (profilePic && profilePicInput) {
  profilePic.addEventListener("click", () => {
    profilePicInput.click();
  });

  // event listener for file input change
  profilePicInput.addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {
      const base64String = e.target.result.split(",")[1];

      // visually show the selected picture
      displayProfileImage(base64String);

      // save to Firestore
      saveProfileImage(base64String);
    };

    reader.readAsDataURL(file);
  });
}

// Save Base64 string to Firestore
async function saveProfileImage(base64String) {
  const user = auth.currentUser;

  if (!user) {
    console.error("No user signed in.");
    return;
  }

  try {
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, { profileImage: base64String }, { merge: true });

    //This is here just for trouble shooting do not worry
    console.log("Profile image saved successfully.");

    window.location.reload();
  } catch (error) {
    //same with this.
    console.error("Error saving profile image:", error);
  }
}

// Display Base64 image inside the circular div
function displayProfileImage(base64String) {
  if (profilePic) {
    profilePic.style.backgroundImage = `url(data:image/png;base64,${base64String})`;
    profilePic.style.backgroundSize = "cover";
    profilePic.style.backgroundPosition = "center";
  }
}

// Load profile picture on page load
function loadProfileImage() {
  onAuthStateChanged(auth, async (user) => {
    if (!user) return;

    const userRef = doc(db, "users", user.uid);
    const snap = await getDoc(userRef);

    if (snap.exists() && snap.data().profileImage) {
      displayProfileImage(snap.data().profileImage);
    }
  });
}

loadProfileImage();

const navButtons = document.querySelectorAll(".nav-button");
const editBtn = document.querySelector(".edit-btn");
const saveBtn = document.querySelector(".save-btn");
const inputs = document.querySelectorAll(
  ".account-form input, .account-form select"
);

// lock inputs
inputs.forEach((input) => (input.disabled = true));

// enable on edit
editBtn.addEventListener("click", () => {
  inputs.forEach((input) => {
    input.disabled = false;
    input.classList.remove("input-locked");
    input.classList.add("input-unlocked");
  });

  editBtn.style.display = "none";
  saveBtn.style.display = "inline-flex";
});

// nav highlight
navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    navButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// save button logic
saveBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  const success = await saveUserInfo();
  if (!success) return;

  inputs.forEach((input) => {
    input.disabled = true;
    input.classList.remove("input-unlocked");
    input.classList.add("input-locked");
  });

  saveBtn.style.display = "none";
  editBtn.style.display = "inline-flex";
});

// populate form from Firestore
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
            age = "",
          } = userSnap.data();

          document.getElementById("email").value = email;
          document.getElementById("username").value = name;
          document.getElementById("display-name").value = displayName;
          document.getElementById("age").value = age;
          document.getElementById("set").value = set;
        }
      } catch (error) {
        console.error("Error fetching user document:", error);
      }
    }
  });
}

// This is the code for save button to update database
async function saveUserInfo() {
  const user = auth.currentUser;
  if (!user) return false;

  const ageInput = document.getElementById("age");
  const ageError = document.getElementById("ageErrorProfile");

  // Clear previous errors
  ageError.textContent = "";
  ageInput.classList.remove("input-error");

  const ageValue = parseInt(ageInput.value);

  // Validate age
  if (isNaN(ageValue) || ageValue < 17 || ageValue > 100) {
    ageError.textContent = "Age must be between 17 and 100.";
    ageInput.classList.add("input-error");
    return false;
  }

  try {
    const userRef = doc(db, "users", user.uid);
    const updatedData = {
      set: document.getElementById("set").value,
      age: ageValue,
      email: document.getElementById("email").value,
      displayName: document.getElementById("display-name").value,
      name: document.getElementById("username").value,
    };

    await setDoc(userRef, updatedData, { merge: true });
    return true;
  } catch (error) {
    console.error("Error saving user data:", error);
    return false;
  }
}

populateUserInfo();
