import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../firebaseConfig.js";
import { logoutUser } from "../authentication.js";

class SiteNavbar extends HTMLElement {
  constructor() {
    super();
    this.renderNavbar();
  }

  renderNavbar() {
    this.innerHTML = `
      <header>
        <nav class="navbar">
          <img
            src="images/logo_white.png"
            alt="Logo"
            height="70"
            class="ms-2 mt-4"
          />

          <!-- Notifications Dropdown -->
          <div class="dropdown ms-auto">
            <button
              class="btn p-0 border-0 bg-transparent"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="images/bell_icon.png"
                alt="Notifications"
                class="me-n2 mt-4"
                width="75"
                height="75"
              />
            </button>
            <ul id="notifDrop" class="dropdown-menu dropdown-menu-end">
              <li><button class="dropdown-item" type="button">Notifications</button></li>
              <li><hr class="dropdown-divider" /></li>
              <li><button class="dropdown-item" type="button">Alert 1</button></li>
              <li><button class="dropdown-item" type="button">Alert 2</button></li>
              <li><button class="dropdown-item" type="button">Alert 3</button></li>
            </ul>
          </div>

          <!-- Main/Profile Dropdown -->
          <div class="dropdown">
            <button
              class="btn p-0 border-0 bg-transparent"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="images/user_icon.png"
                alt="Profile"
                class="me-2 mt-4"
                width="80"
              />
            </button>
            <ul id="mainDrop" class="dropdown-menu dropdown-menu-end">
              <li>
                <div class="d-flex align-items-center">
                  <img
                    src="images/user_icon.png"
                    alt="Profile"
                    class="ms-2"
                    width="60"
                    height="60"
                  />
                  <div class="d-flex flex-column ms-2">
                    <span id="displayName">Display Name</span>
                    <span id="username"></span>
                  </div>
                </div>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="profile.html">Profile</a></li>
              <li><a class="dropdown-item" href="settings.html">Settings</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><button id="logoutBtn" class="dropdown-item" type="button">Logout</button></li>
            </ul>
          </div>
        </nav>
      </header>
    `;

    // Wire up logout button
    const logoutBtn = this.querySelector("#logoutBtn");
    logoutBtn?.addEventListener("click", async () => {
      try {
        await logoutUser();
        console.log("User logged out successfully.");
        window.location.href = "login.html";
      } catch (err) {
        console.error("Logout failed:", err);
      }
    });

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.querySelector("#username").textContent =
          user.username || "Anonymous";
      }
    });
  }
}

customElements.define("site-navbar", SiteNavbar);
