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

// ======== PROFILE PICTURE (NEW BASE64 SYSTEM) ======== //

const profilePic = document.querySelector(".profile-pic");
const profilePicInput = document.getElementById("profile-pic-input");

// Click the circle → open file picker
if (profilePic && profilePicInput) {
  profilePic.addEventListener("click", () => {
    profilePicInput.click();
  });

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

    console.log("Profile image saved successfully.");
  } catch (error) {
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

// ======== REST OF YOUR EXISTING CODE (unchanged) ======== //

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
  inputs.forEach((input) => (input.disabled = false));
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
  await saveUserInfo();
  inputs.forEach((input) => (input.disabled = true));
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
          } = userSnap.data();

          document.getElementById("email").value = email;
          document.getElementById("username").value = name;
          document.getElementById("display-name").value = displayName;
          document.getElementById("set").value = set || "Select";
        }
      } catch (error) {
        console.error("Error fetching user document:", error);
      }
    }
  });
}

async function saveUserInfo() {
  const user = auth.currentUser;
  if (!user) return;

  try {
    const userRef = doc(db, "users", user.uid);
    const updatedData = {
      set: document.getElementById("set").value,
      email: document.getElementById("email").value,
      displayName: document.getElementById("display-name").value,
      name: document.getElementById("username").value,
    };

    await setDoc(userRef, updatedData, { merge: true });
  } catch (error) {
    console.error("Error saving user data:", error);
  }
}

populateUserInfo();
