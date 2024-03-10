// // //khởi tạo class người
// class Nguoi {
//     constructor(_name, _age, _job, _id, _hobbies, _hometown) {
//         this.name = _name;
//         this.age = _age;
//         this.job = _job;
//         this.id = _id;
//         this.hobbies = _hobbies;
//         this.hometown = _hometown;

//     }
//         gioithieu(){
//             return `Xin chao toi ten la ${this.name} va toi ${this.age} toi dang lam nghe ${this.job}. Rat vui duoc lam quen voi cac ban`
//         }
//         sinhnhat(){
//             return `Chuc mung sinh nhat. Ban da ${this.age} tuoi`
//         }
// }

// // let Lanh = new Nguoi("Lanh", 16, "học sinh", "002123214343", "chơi thể thao", "Hà Nội");
// // console.log(Lanh.gioithieu());
// // console.log(Lanh.sinhnhat());


// class Giaovien extends Nguoi {
//     constructor(_name, _age, _job, _id, _hobbies, _hometown, _monhoc, _capbac) {
//         //ham super su dung de ke thua cac thuoc tinh cua class cha sang class con.
//         super(_name, _age, _job, _id, _hobbies, _hometown);
//         this.monhoc = _monhoc;
//         this.capbac = _capbac;
//     }
//     gioithieu() {
//         return (
//             super.gioithieu() +
//             `.Nhung nam gan day toi da chuyen sang bo phan giang day tai truong hoc voi cap bac ${this.capbac}`
//         );
//     }
//     sinhnhat(){
//         return `Sinh nhat giao vien ${rhis.name} dang giang day tao bo mon ${rhis.monhoc} tuoi thu ${this.age}!!!!!`
//     }
// };


// let Hieu = new Giaovien("Hieu", 26, "developer", "00434545454", "lap trinh", "Ha Noi", "tin", 5)
// console.log(Hieu.name);
// console.log(Hieu.gioithieu());


// phuong thuc set() get(): dung de dinh nghia gelter va setter cho thuoc tinh cua 1 doi tuong 
class Nguoi {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    get name() {
        return this.name
    }

    set age(tuoimoi) {
        if (tuoimoi != parseInt(tuoimoi)) {
            if (tuoimoi > 0) {
                this.age = tuoimoi;
            }

        }
        else {
            console.log("tuoi moi phai la 1 so nguyen duong");
        }
    }
}
//su dung class nguoi vua khai bao
let Lanh = new Nguoi("Lanh", 16)
console.log(Lanh.name);
console.log(Lanh.age);

Lanh.name = "Le Anh"
console.log(Lanh.name);

// let a = 2.5;
// console.log(
//     (a === parseInt(a)) ? `${a} la so nguyen` : `${a} khong phai la so nguyen`
// );
// let b = 2;
// console.log(
// (b%1==0)?`${b} la so nguyen`:`${b} khong phai la so nguyen`
// );


// bai tap
// khoi tao kieu du lieu phan so gom:
// 1. ham khoi tao gom tu va Mau
// 2. viet phuong thuc cong tru nhan chia voi 2 phan so
// 3. viet phuong thuc hien thi phan so
// htps(){
//     console.log(`${this.tu}/${this.mau}`);
// }

class phanso{
    constructor(_tu, _mau){
        this.tu=_tu;
        this.mau=_mau;
    }
}
Cong(phansokhac){
    const tumoi = this.tu*phansokhac.mau + this.mau*phansokhac.tu;
    const maumoi = this.mau*phansokhac.mau;
}