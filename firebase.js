import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDfqNxfG1zxo_tt8bsPrkTljcMzkDzf9i8",
  authDomain: "ecotrace-8ba00.firebaseapp.com",
  projectId: "ecotrace-8ba00",
  storageBucket: "ecotrace-8ba00.firebasestorage.app",
  messagingSenderId: "87765091380",
  appId: "1:87765091380:web:fe6c34ec9d1c9ee7a8b661"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
