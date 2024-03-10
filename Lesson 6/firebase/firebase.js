 // Import the functions you need from the SDKs you need
 import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyC6RnmmPcAhDnnccpFOU5uqBAv9tVnhyeE",
   authDomain: "jsi17-dc888.firebaseapp.com",
   projectId: "jsi17-dc888",
   storageBucket: "jsi17-dc888.appspot.com",
   messagingSenderId: "323222975146",
   appId: "1:323222975146:web:286630fdd22523fb3a96d3"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);