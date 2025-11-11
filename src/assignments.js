import { auth } from "/src/firebaseConfig.js";
import { db } from "/src/firebaseConfig.js";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
