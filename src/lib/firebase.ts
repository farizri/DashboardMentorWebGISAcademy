import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDICZw2VvtGeHg81zP6D7oz7jfHlk1NSoY",
  authDomain: "dashboardwebgis.firebaseapp.com",
  projectId: "dashboardwebgis",
  storageBucket: "dashboardwebgis.firebasestorage.app",
  messagingSenderId: "516547218978",
  appId: "1:516547218978:web:837b8b458efa5d3624047b",
  measurementId: "G-2ND82G842G"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

// Analytics (Client-side only)
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      getAnalytics(app);
    }
  });
}

export { db };
