// class Person{
//     //hàm khởi tạo: khai báo thuộc tính của class đó
//     constructor(_name, _age, _address,  _id){
//         ///gán giá trị với 
//         this.name = _name
//         this.age = _age
//         this.address = _address
//         this.id = _id

//     }
//     say(){
//         alert("hello How are you!!");

//     }
// }
// let PhanAnh = new Person();
// PhanAnh.say();

// let LeAnh = new Person('Lê Anh', 16, "Cầu Giấy", "012345678")
// console.log(LeAnh.name);
// console.log(LeAnh.age);
// console.log(LeAnh.address);
// console.log(LeAnh.id);




// const PI = 3.14;
// class circle {
//     constructor (_bankinh){
//         this.bankinh=_bankinh;
//     }

//     dtht(){
//         return PI*this.bankinh*this.bankinh
//     }

//     cvht(){
//         return PI*this.bankinh*2
//     }
// }
// let circle1 = new circle(2);
// console.log("diện tích hình tròn", circle1.dtht());
// console.log("chu vi hình tròn", circle1.cvht());



////bài 2: khởi tạo KDL hình chữ nhật
//// biết rằng hình chữ nhật có thuộc tính truyền vào kà chiều dài cà chiều rộng:tính cv dt
class hcn {
    constructor(_cd, _cr){
        this.cd=_cd;
        this.cr=_cr;

    }
    cvhcn(){
        return this.cd*2+this.cr*2
    }
    dthcn(){
        return this.cd*this.cr
    }
}
let hcn1 = new hcn(3, 4)
console.log("chu vi hinh chu nhat", hcn1.cvhcn());
console.log("dien tich hinh chu nhat", hcn1.dthcn());