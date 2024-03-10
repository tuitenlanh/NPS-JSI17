//Spread syntax
// let a = [1,2,3,4,5]
// let b = [...a]

// let obj1 = {
//     name:"John",
//     age: 24,
//     job: "dev",
// }

// let obj2 = {
//     name:"Jame",
//     age: 25,
//     job: "dev",
// }
// let obj3 = Object.assign(obj1, obj2);
// console.log("obj3", obj3);

// let arr = [1,2,3,4,5];
// let a = arr.map(item=>item*2);
// console.log(a);

const printname = (students) => {
   let getName = [];
    ////hàm in ra tên
    for (let key of students) {
        getName.push(key.name);
    }
    return getName.join(", ")
    // let getName = students.name
}


let student = [
    {
        name: "Quang Anh",
        age: 17,
        hobbies: ["cầu lông", 'đọc truyện']
    },
    {
        name: "Lê Anh",
        age: 16,
        hobbies: ["đá bóng", 'bóng rổ']
    },
    {
        name: "Phan Anh",
        age: 17,
        hobbies: ["đá bóng", 'đọc truyện']
    },
]
let a = student.filter(item => item.age >= 17)
console.log(printname(a));

let b = student.filter(item => item.hobbies.includes("đọc truyện"));
console.log(printname(b));

let c = student.filter(item => item.hobbies.includes("đá bóng"));
console.log(printname(c));


