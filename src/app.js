import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "./styles/style.css";
import { doc, getDoc } from "firebase/firestore";
import { onAuthReady } from "./authentication.js";
import { db } from "./firebaseConfig.js";

function showDashboard() {
  const nameElement = document.getElementById("username");
  const displayNameElement = document.getElementById("displayName");

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
      : user.name || "anonymous";
    const displayName = userDoc.exists()
      ? userDoc.data().displayName
      : user.displayName || "anonymous";

    if (nameElement) {
      nameElement.textContent = `${name}`;
      displayNameElement.textContent = `${displayName}`;
    }
  });
}

showDashboard();
