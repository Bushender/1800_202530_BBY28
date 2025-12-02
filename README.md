# Campus Companions


## Overview
Campus Companions is a client-side JavaScript web application that helps users explore the BCIT campus and helps track assignments via your set. The app displays an interactable map of campus where you can click to view specific buildings and their floor plans, as well as a tab where you add, edit, or delete assignments,and even mark them as "done". The assignments are shared throughout your set, but marking it as complete is something that only appears for the logged in user. The schedule tab is similar, just hard coded classes into the database that are loaded in. 

Users can edit their profile to change their username and display name, as well as adjust their set to make use of the assignment feature. The map page allows you to view custom drawn floor plans of each building on campus to better navigate once you're inside a building.

Developed for the COMP 1800 course, this project applies User-Centred Design practices and agile project management, and demonstrates integration with Firebase backend services for storing set assignments for users.

---


## Features

- Add, edit, and delete shared assignments with your set
- Add to your schedule for notifications
- Edit your profile details
- Interact with the campus map of buildings and their floormaps
- Responsive design for desktop and mobile

---


## Technologies Used

Example:
- **Frontend**: HTML, CSS, JavaScript
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Backend**: Firebase for hosting
- **Database**: Firestore
- **Authentication**: Firebase Authentication
- **Map**: Mapbox

---


## Usage

1. Open your browser and visit `REPLACE WITH HOSTED LINK`.
2. Log in or create an account with your set.
3. Navigate campus and its buildings via the main Map tab.
4. View and add/edit assignments that are shared throughout your set and mark them as done for yourself.
5. Check your class schedule in the schedule tab.
6. Edit your profile picture, add a display name, or correct any username/set typos.

---


## Project Structure

```
1800_202530_BBY28/
├── images/...
├── node_modules/...
├── src/
│   ├── components/
|       ├── site-footer.js
|       ├── site-navbar.js
|   ├── styles/
│       ├── style.css
│   ├── app.js
│   ├── assignment.js
│   ├── authentication.js
│   ├── firebaseConfig.js
│   ├── floorPlan.js
│   ├── loginSignup.js
│   ├── main.js
│   ├── profile.js
│   ├── schedule.js
├── .env
├── .gitignore
├── assignments.html
├── floorPlaceholder.html
├── index.html
├── login.html
├── main.html
├── NE.html
├── NW.html
├── package-lock.json
├── package.json
├── profile.html
├── README.md
├── schedule.html
├── SE.html
├── settings.html
├── skeleton.html
├── SW.html
```

---


## Contributors
- **Thien Pham** - BCIT CST Student with a passion for gaming and experimental coding. Fun fact: Fun fact is a fun fact but not always a fun fact. the one above all.
- **Grace Yang** - BCIT CST Student, Frontend enthusiast with a knack for creative design. Fun fact: She wears a hat.
- **Anas Shihab** BCIT CST Student, nice guy. Fun fact: He's passionate about history.

---


## Acknowledgments

- Icons were taken and edited from Boxicons.
- Code snippets were adapted from Demo's and Carly's tech tips.
- Portions of the code were outlined and debugged with ChatGPT.
- Comments and naming conventions were edited with ChatGPT.
- Mapbox was used for the navigation in our map tab.

---


## Limitations and Future Work
### Limitations

- The amount of time we had allocated to coding.
- Quality of life features can be further improved.
- Limited knowledge of technology/javascript.
- Some Firebase features are locked behind a paywall.

### Future Work

- Implement all the map building layouts.
- Add password change/forgot password function.
- Pop-up events on the map.
- Notifications for when an assignment is near to it's due date.
- The date on an assignment only turns red when it's closer to the due date.
- Schedule UX should fit in with the rest of the app design.
- Schedule should display classes according to which set is signed in.

---


## License

This project is licensed under the MIT License. See the LICENSE file for details.
