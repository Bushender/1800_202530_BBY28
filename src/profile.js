/* === General Page Setup === */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
}

main.profile-container {
  display: flex;
  min-height: calc(100vh - 150px); /* leaves room for navbar + footer */
  background-color: #fff;
}

/* === Sidebar Section === */
.sidebar {
  width: 250px;
  background-color: #fafafa;
  border-right: 1px solid #ddd;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-pic {
  width: 100px;
  height: 100px;
  background-color: #d9d9d9;
  border-radius: 50%;
  margin-bottom: 20px;
}

.sidebar-nav {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.nav-button {
  background-color: transparent;
  border: none;
  padding: 12px;
  text-align: left;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.nav-button:hover {
  background-color: #e6e6e6;
}

.nav-button.active {
  background-color: #007bff;
  color: white;
}

/* === Main Content Area === */
.profile-content {
  flex: 1;
  padding: 40px;
  box-sizing: border-box;
}

.profile-content h1 {
  margin-top: 0;
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #222;
}

/* === Form Styling === */
.account-form {
  max-width: 500px;
  display: flex;
  flex-direction: column;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

input,
select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

input:focus,
select:focus {
  border-color: #007bff;
}

/* === Button Section === */
.form-buttons {
  margin-top: 20px;
}

.edit-btn,
.save-btn {
  padding: 8px 16px;
  border: 1px solid #444;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 10px;
  font-size: 1rem;
}

.edit-btn {
  background-color: white;
}

.edit-btn:hover {
  background-color: #f1f1f1;
}

.save-btn {
  background-color: #007bff;
  color: white;
  border: none;
}

.save-btn:hover {
  background-color: #005fcc;
}

/* === Responsive Layout === */
@media (max-width: 768px) {
  main.profile-container {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    border-right: none;
    border-bottom: 1px solid #ddd;
  }

  .sidebar-nav {
    flex-direction: row;
    gap: 10px;
  }

  .profile-content {
    padding: 20px;
  }
}
