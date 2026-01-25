import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDfqNxfG1zxo_tt8bsPrkTljcMzkDzf9i8",
  authDomain: "ecotrace-8ba00.firebaseapp.com",
  projectId: "ecotrace-8ba00"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = async function(){
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  try{
    await signInWithEmailAndPassword(auth,email,password);
    location.href="dashboard.html";
  }catch(err){
    alert("Login failed: " + err.message);
  }
}
