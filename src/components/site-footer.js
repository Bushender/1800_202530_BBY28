import { onAuthStateChanged } from "firebase/auth";

// import { auth } from "src/firebaseConfig.js";
// import { logoutUser } from "src/authentication.js";

class SiteFooter extends HTMLElement {
  constructor() {
    super();
    this.renderFooter();
  }

  renderFooter() {
    this.innerHTML = `
      <footer class="footer">
        <div class="containment">
          <a href="/assignments.html" class="text-decoration-none">
            <figure><img
                src="images/assignments_icon.png"
                alt="Assignments"
                class="footIcon"
              />
              <figcaption class="figcap">Assignments</figcaption>
            </figure>
          </a>
          <a href="main.html" class="text-decoration-none">
            <figure>
              <img
                src="images/map_icon.png"
                alt="Map"
                class="footIcon"
              />
              <figcaption class="figcap">Map</figcaption>
            </figure>
          </a>
          <a href="schedule.html" class="text-decoration-none">
            <figure>
              <img
                src="images/schedule_icon.png"
                alt="Schedule"
                class="footIcon"
              />
              <figcaption class="figcap">Schedule</figcaption>
            </figure>
          </a>
        </div>
      </footer>
    `;
  }
}

customElements.define("site-footer", SiteFooter);
