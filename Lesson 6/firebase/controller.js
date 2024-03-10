const lowerCaseLetter = / [a-z] /g;
const upperCaseletter = / [A-Z]/g;
const number = / [0-9] /g;

//file này dùng để soát lỗi người dùng nhập vào thẻ input
const controller = {};
controller.register = (data) =>{
    if (data.email == ""){
        document.getElementById("email-error").innerHTML = "*Please input your email"
    }
    else{
        document.getElementById("email-error").innerHTML = ""
    }
    if (data.password == ""){
        document.getElementById("password-error").innerHTML = "*Please input your password"
    }
    else{
        document.getElementById("password-error").innerHTML = ""
    }
}

////xử lí password
if(data.password.length<6){
    document.getElementById("password-error").innerHTML = 
    "Your password must be at least 6 characters";
}
else if (!data.password.match(lowerCaseLetter)) {
    document.getElementById("password-error").innerHTML = 
    "Your password must contain a lower case letter";
}
else if (!data.password.match(upperCaseLetter)) {
    document.getElementById("password-error").innerHTML = 
    "Your password must contain a upper case letter";
}
else if (!data.password.match(number)) {
    document.getElementById("password-error").innerHTML = 
    "Your password must contain a number or speacial chacter";
}
else{
    //thoả mãn mọi điều kiện
    if(data.email !=="" && data.password !==""){
        return data;
    }
}
controller.login = () =>{
    
}