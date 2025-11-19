import { logoutUser, onAuthReady } from "../authentication.js";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig.js";

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
            id="logoIcon"
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
                id="notifIcon"
                class="me-n2 mt-4"
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
                id="pfpIcon"
                class="me-2 mt-4"
              />
            </button>
            <ul id="mainDrop" class="dropdown-menu dropdown-menu-end">
              <li>
                <div class="d-flex align-items-center">
                  <img
                    src="images/user_icon.png"
                    alt="Profile"
                    id="dropdownPFP"
                    class="ms-2"
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

    const nameElement = this.querySelector("#username");
    const displayNameElement = this.querySelector("#displayName");

    onAuthReady(async (user) => {
      // This is to check for IFFFFF the user is logged in or not and if not it deals
      // with the un caught uid promise error.
      if (!user) {
        console.log("No user logged in — navbar using default icons.");

        const navbarIcon = this.querySelector("#pfpIcon");
        const dropdownIcon = this.querySelector("#dropdownPFP");

        if (navbarIcon) navbarIcon.src = "images/user_icon.png";
        if (dropdownIcon) dropdownIcon.src = "images/user_icon.png";

        if (nameElement) nameElement.textContent = "";
        if (displayNameElement) displayNameElement.textContent = "Guest";

        return;
      }

      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);

      let name = "anonymous";
      let displayName = "anonymous";
      let profileImage = null;

      if (userDoc.exists()) {
        const data = userDoc.data();
        name = data.name || name;
        displayName = data.displayName || displayName;
        profileImage = data.profileImage || null;
      }

      // Update text labels
      if (nameElement) {
        nameElement.textContent = name;
      }
      if (displayNameElement) {
        displayNameElement.textContent = displayName;
      }

      //This is to load the profile imagage for the profile
      const navbarIcon = this.querySelector("#pfpIcon");
      const dropdownIcon = this.querySelector("#dropdownPFP");

      if (profileImage) {
        const imgSrc = `data:image/png;base64,${profileImage}`;

        if (navbarIcon) navbarIcon.src = imgSrc;
        if (dropdownIcon) dropdownIcon.src = imgSrc;
      }
    });
  }
}

customElements.define("site-navbar", SiteNavbar);
