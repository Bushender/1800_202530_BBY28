import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "./styles/style.css";
import { doc, onSnapshot, getDoc } from "firebase/firestore";
import { onAuthReady } from "./authentication.js";
import { db } from "./firebaseConfig.js";

function showDashboard() {
  const nameElement = document.getElementById("username"); // the <h1> element to display "Hello, {name}"

  onAuthReady(async (user) => {
    if (!user) {
      // Only redirect if you're not already on the login or signup pages
      const path = window.location.pathname;
      if (
        !path.endsWith("index.html") &&
        !path.endsWith("login.html") &&
        !path.endsWith("signup.html")
      ) {
        location.href = "login.html";
      }
      return;
    }

    const userDoc = await getDoc(doc(db, "users", user.uid));
    const name = userDoc.exists()
      ? userDoc.data().name
      : user.displayName || user.email;

    if (nameElement) {
      nameElement.textContent = `${name}`;
    }
  });
}

showDashboard();
