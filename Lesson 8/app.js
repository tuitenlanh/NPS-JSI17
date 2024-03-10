// {
//     name:"Lanh",
//     age: 16,
//     address: {
//         city: Hà Nội,
//         district: Cầu Giấy,
//     }
// }



////kết nối firebase vào dự án này
import{
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    getFirestore,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"

// Import the functions you need from the SDKs you need
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
const db = getFirestore(app);//kêt nối firebase với database

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

//function to render tasks
function renderTasks(tasks){
    taskList.innerHTML = "";
    task.forEach((task)=>{
        const li = document.createElement("li")
        li.innerHTML=`
        <span>${task.description}</span>
        <button class="deleteBtn" data-id="${task.id}">xoá</button>`;
        taskList.appendChild(li);//li vừa tạo ra sẽ là con của thẻ ul

        //thêm sự kiện lắng nghe nút button delete được ấn
        const deleteBtn = li.querySelector(".deleteBtn");
        deleteTask(Task.id);//gọi hàm xoá task(xoá thẻ li)
    });
}

//function cập nhật dữ liệu mới nhất từ db
const getTasks = async ()=>{
    const querySnapshot = await getDocs(collection(db, "tasks"));
    console.log(querySnapshot);
    const task = querrySnapshot.docs.map((doc)=>{
        id: doc.id,
        description: doc.data().description,
    });
    renderTasks(tasks);
}
//function thêm mới task vào db

//function xoá task trong db

//function lắng nghe thay đổi từ người dùng tại giao diện => xử lý tương tự với db
