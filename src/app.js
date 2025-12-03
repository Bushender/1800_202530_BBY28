// imports all the boostrap/css for all the html pages who source app.js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./styles/style.css";
import { onAuthReady } from "./authentication.js";

function showDashboard() {
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
  });
}

showDashboard();
