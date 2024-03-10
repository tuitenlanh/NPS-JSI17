// {
//     {
//         let a = 1;
//         {
//             let b = 2;
//             var c = 3;
//             console.log(b);
//             console.log(c);
//             console.log(a);

//         }
//     }
// }

// let arr = [1,2,3];
// let arr1 = arr

// let arr = [1,2,3];
// let arr1 = [...arr]
// arr[0] = 'vi tri so 0'
// console.log(arr1[0]);

// let a = [1,2,3];
// let b = [4,5,6];;
// let c = [...a, ...b];
// console.log(c);

// let obj = {
//     name: "huskey",
//     age: 10,
// }
// let obj1 = {...obj}
// console.log(obj1);
// let obj2 = {...obj}
// let obj3 = {...obj, ...obj2}
// console.log(obj3);

// let arr = [1,2,3,4,5,6];
// //in ra toan bo phan tu cua mang voi gia tri duoc binh phuong len
// let arr1 = [];
// for (let i = 0; i < arr.length; i++) {
//     arr1[i] = arr[i]*arr[i];
    
// }
// console.log(arr1);

// let arrmapbinhphuong = arr.map(item => item*item);
// console.log(arrmapbinhphuong);
// let arrcc = arr.map(item => item+5);
// console.log(arrcc);
// //loc ra cac so chan trong mang arr va luu tru vao mang moi
// let sochan = arr.filter(item => item%2 == 0);
// console.log(sochan);


//bai tap tong hop: khai bao 1 mang users
let users = [
    {
        name: "phan anh",
        age: 17,
        school: "mindx",
    },
    {
        name: "quang anh",
        age: 17,
        school: "mindx",
    },
    {
        name: "le anh",
        age: 16,
        school: "mindx",
    },
]
let a = users.filter(item => item.age==16);
console.log(a);






