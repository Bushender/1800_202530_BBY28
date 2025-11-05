import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "./styles/style.css";
import { doc, onSnapshot, getDoc } from "firebase/firestore";
import { onAuthReady } from "./authentication.js";
import { db } from "./firebaseConfig.js";
