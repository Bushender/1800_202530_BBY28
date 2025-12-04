// code "borrowed" from demo07

// Imports lines
import { auth } from "/src/firebaseConfig.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { db } from "/src/firebaseConfig.js";
import { doc, setDoc } from "firebase/firestore";

// --- Login User ---
// Signs in an existing user with email + password.
// Returns the user credential object.
export async function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// --- Signup User ---
// Creates a new Firebase Auth account, updates display name,
// and stores extra user details in Firestore.
export async function signupUser(name, email, password, extraData) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;

  // Update the display name
  await updateProfile(user, { displayName: name });

  try {
    await setDoc(doc(db, "users", user.uid), {
      name: name,
      email: email,
      country: "Canada",
      school: "BCIT",
      set: extraData.set,
      age: extraData.age,
    });

    console.log("Firestore user document created successfully!");
  } catch (error) {
    console.error("Error creating user document in Firestore:", error);
  }

  return user;
}

// --- Logout User ---
// Signs out the user and returns them to the login page.
export async function logoutUser() {
  await signOut(auth);
  window.location.href = "index.html";
}

// --- Auth State Check ---
// Listens for login or logout changes on main.html:
// If logged in then display greeting
// If logged out then redirect to login
export function checkAuthState() {
  onAuthStateChanged(auth, (user) => {
    if (window.location.pathname.endsWith("main.html")) {
      if (user) {
        const displayName = user.displayName || user.email;
        $("#welcomeMessage").text(`Hello, ${displayName}!`);
      } else {
        window.location.href = "index.html";
      }
    }
  });
}

// --- onAuthReady ---
// Runs callback when Firebase auth state becomes available.
// Useful for pages that depend on logged-in user data.
export function onAuthReady(callback) {
  return onAuthStateChanged(auth, callback);
}

// --- Auth Error Messages ---
// Basically just makes error message into a more readable format
export function authErrorMessage(error) {
  const code = (error?.code || "").toLowerCase();

  const map = {
    "auth/invalid-credential": "Wrong email or password.",
    "auth/invalid-email": "Please enter a valid email address.",
    "auth/user-not-found": "No account found with that email.",
    "auth/wrong-password": "Incorrect password.",
    "auth/too-many-requests": "Too many attempts. Try again later.",
    "auth/email-already-in-use": "Email is already in use.",
    "auth/weak-password": "Password too weak (min 6 characters).",
    "auth/missing-password": "Password cannot be empty.",
    "auth/network-request-failed": "Network error. Try again.",
  };

  return map[code] || "Something went wrong. Please try again.";
}
