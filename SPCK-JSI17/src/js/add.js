const add = () => {
    let name = document.querySelector('.name').value;
    let email = document.querySelector('.email').value;
    let password = document.querySelector('.password').value;
    let role = document.querySelector('.role').value;

    
    const data = {
        name:name,
        email:email,
        password:password,
        role:role,
    }
    
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    window.location.href = '../html/dashboard user.html'

    alert("thanh cong");
    };
    
    fetch('http://localhost:3000/users')
        .then((response) => response.json())
        .then((data)=>{
            console.log("data ALL", data);
        })
    