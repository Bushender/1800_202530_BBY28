import{p as u,r as m,d as g,c as b,g as f}from"./app-dDW-M8-3.js";class w extends HTMLElement{constructor(){super(),this.renderNavbar()}renderNavbar(){this.innerHTML=`
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
    `,this.querySelector("#logoutBtn")?.addEventListener("click",async()=>{try{await u(),console.log("User logged out successfully."),window.location.href="login.html"}catch(n){console.error("Logout failed:",n)}});const o=this.querySelector("#username"),e=this.querySelector("#displayName");m(async n=>{if(!n){const t=this.querySelector("#pfpIcon"),c=this.querySelector("#dropdownPFP");t&&(t.src="images/user_icon.png"),c&&(c.src="images/user_icon.png"),o&&(o.textContent=""),e&&(e.textContent="Guest");return}const p=g(b,"users",n.uid),l=await f(p);let s="Username",i="Display Name",a=null;if(l.exists()){const t=l.data();s=t.name||s,i=t.displayName||i,a=t.profileImage||null}o&&(o.textContent=s),e&&(e.textContent=i);const r=this.querySelector("#pfpIcon"),d=this.querySelector("#dropdownPFP");if(a){const t=`data:image/png;base64,${a}`;r&&(r.src=t),d&&(d.src=t)}})}}customElements.define("site-navbar",w);
