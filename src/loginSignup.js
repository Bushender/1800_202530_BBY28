// Code 'borrowed' from the demo07

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./styles/style.css";
import { loginUser, signupUser, authErrorMessage } from "./authentication.js";

// --- Login and Signup Page ---
// Handles toggling between Login/Signup views and form submits

function initAuthUI() {
  const alertEl = document.getElementById("authAlert");
  const loginView = document.getElementById("loginView");
  const signupView = document.getElementById("signupView");
  const toSignupBtn = document.getElementById("toSignup");
  const toLoginBtn = document.getElementById("toLogin");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const redirectUrl = "main.html";

  // Toggle element visibility
  function setVisible(el, visible) {
    el.classList.toggle("d-none", !visible);
  }

  // Show error message with accessibility and auto-hide
  let errorTimeout;
  function showError(msg) {
    alertEl.textContent = msg || "";
    alertEl.classList.remove("d-none");
    clearTimeout(errorTimeout);
    errorTimeout = setTimeout(hideError, 5000); // Auto-hide after 5s
  }

  // Hide error message
  function hideError() {
    alertEl.classList.add("d-none");
    alertEl.textContent = "";
    clearTimeout(errorTimeout);
  }

  // Enable/disable submit button for forms
  function setSubmitDisabled(form, disabled) {
    const submitBtn = form?.querySelector('[type="submit"]');
    if (submitBtn) submitBtn.disabled = disabled;
  }

  // --- Event Listeners ---
  // Toggle buttons
  toSignupBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    hideError();
    setVisible(loginView, false);
    setVisible(loginWelcome, false);
    setVisible(signupView, true);
    setVisible(signupWelcome, true);
    signupView?.querySelector("input")?.focus();
  });

  toLoginBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    hideError();
    setVisible(signupView, false);
    setVisible(signupWelcome, false);
    setVisible(loginView, true);
    setVisible(loginWelcome, true);
    loginView?.querySelector("input")?.focus();
  });

  // Login form submit
  loginForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    hideError();
    const email = document.querySelector("#loginEmail")?.value?.trim() ?? "";
    const password = document.querySelector("#loginPassword")?.value ?? "";
    if (!email || !password) {
      showError("Please enter your email and password.");
      return;
    }
    setSubmitDisabled(loginForm, true);
    try {
      await loginUser(email, password);
      location.href = redirectUrl;
    } catch (err) {
      showError(authErrorMessage(err));
      console.error(err);
    } finally {
      setSubmitDisabled(loginForm, false);
    }
  });

  // Signup form submit
  signupForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    hideError();
    const name = document.querySelector("#signupUsername")?.value?.trim() ?? "";
    const email = document.querySelector("#signupEmail")?.value?.trim() ?? "";
    const password = document.querySelector("#signupPassword")?.value ?? "";
    const confirmPassword =
      document.querySelector("#signupConfirmPassword")?.value ?? "";

    // basic field validation
    if (!name || !email || !password || !confirmPassword) {
      showError("Please fill in all fields.");
      return;
    }

    // password match check
    if (password !== confirmPassword) {
      showError("Passwords do not match.");
      return;
    }

    setSubmitDisabled(signupForm, true);
    try {
      await signupUser(name, email, password);
      location.href = redirectUrl;
    } catch (err) {
      showError(authErrorMessage(err));
      console.error(err);
    } finally {
      setSubmitDisabled(signupForm, false);
    }
  });
}

// --- Initialize UI on DOMContentLoaded ---
document.addEventListener("DOMContentLoaded", initAuthUI);
