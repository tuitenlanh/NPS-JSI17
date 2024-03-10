import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signOut,
    updateProfile,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"

import { auth } from "./firebase"



const registerForm = document.getElementById("register-form")
registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        email: registerForm.email.value.trim(),
        passwword: registerForm.password.value,
    };
    let dataClean = controller.register(data);

    ///xử lí firebase
    createUserWithEmailAndPassword(dataClean.email, dataClean.password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            console.log(user);

            await sendEmailVerification(user);
            //hàm gửi email xác thực người dùng gửi đến email cá nhân đc đăng ký
            await signOut(auth);

            alert("Please verify your email");

            location.href = "index.html"
        })
        .catch((error) => {
            console.log(eror);
            const errorCode = error.code;
            const errorMessage = error.messenage;
            console.log(errorCode, errorMessage);


            alert(errorCode)
        })
});
