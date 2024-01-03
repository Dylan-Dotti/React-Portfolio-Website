import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import "firebase/storage";

const projectId = "portfolio-website-8458d";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2Rrv3_lklijsfYt8622Oj5I4I_1ByTrE",
  authDomain: `${projectId}.firebaseapp.com`,
  projectId: projectId,
  storageBucket: `${projectId}.appspot.com`,
  messagingSenderId: "779117476229",
  appId: "1:779117476229:web:08cc18cfb2f20879822cec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export default storage;
