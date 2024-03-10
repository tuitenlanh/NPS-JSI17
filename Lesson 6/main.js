// /////câu 9
// let m = [1,2,3,4,5,6,"hh", "9",80,100];
// //xoá phần tử không phải number
// let newM = m.filter(item => typeof(item) == "number");
// console.log("newM: ", newM);
// let mSquared = newM.map(item => item*item);
// console.log("mSquared: ", mSquared);

// /////câu 10
// let str = ' High knowledge, high return';
// let arr = str.split(" ");
// console.log("arr: ", arr);
// let newArr = arr.filter(item => item !="");
// console.log("newArr: ", newArr);


/////câu 11
// class people {
//     constructor(name, age, address) {
//         this._name = name;
//         this._age = age;
//         this._address = address;
//     }

// }

// class student extends people {
//     constructor(name, age, address, id, math, physical, chemistry) {
//         super(name, age, address);
//         this._id = id;
//         this._math = math;
//         this._physical = physical;
//         this._chemistry = chemistry;
//     }
//     get math() {
//         return this._math;
//     }
//     get physical() {
//         return this._physical;
//     }
//     get chemistry() {
//         return this._chemistry;
//     }

//     set math(newMath) {
//         this._math = newMath;
//     }
//     set physical(newPhysical) {
//         this._physical = newPhysical;
//     }
//     set chemistry(newChemistry) {
//         this._chemistry = newChemistry;
//     }


//     GPA() {
//         return (this._math + this._physical + this._chemistry) / 3;
//     }
// }

// let Lanh = new student("Lanh", 16, "Hà Nội", "012345678", 9, 8, 7);
// console.log(
//     Lanh.GPA()
// );
// console.log();

////câu 12
class hinh{
    constructor(cr, cd) {
        this._cr = cr;
        this._cd = cd;
    }

}
class tamgiac extends hinh {
    constructor(cr, cd){
        super(cr, cd);
    }
    area(){
        return this._cr*this._cd/2;
    }
}
class hcn extends hinh {
    constructor(cr, cd){
        super(cr, cd);
    }
    area(){
        return this._cr*this._cd/2;
    }
}

const main = () => {
    const triangle = new tamgiac(5, 8);
    const rectangle = new hcn (4, 10)
    console.log(`diện tích hình tam giác là ${triangle.area()}`);
    console.log(`diện tích hình chữ nhất là ${rectangle.area()}`);

}
main()