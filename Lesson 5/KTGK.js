class people {
    constructor(name, age, addres) {
        this._name = name;
        this._age = age;
        this._addres = addres;
    }
    get name() {
        return this._name;
    }
    set name(newname) {
        return this._name = newname;
    }
    get age() {
        return this._age;
    }
    set age(newage) {
        if (newage == parseInt(newage)) {
            if (newage > 0) {
                this._age = newage;
            }
            else {
                console.log("loi");
            }
        }
        else {
            console.log("loi");
        }
    }
}
let lanh = new people("lanh", 16, "Ha Noi")
console.log(lanh._name);
console.log(lanh._age);
console.log(lanh._addres);

class student extends people{
    constructor(name, age, addres, id, math, physical, chemistry) {
        super(name, age, addres);
        this._id = id;
        this._math = math;
        this._physical = physical;
        this._chemistry = chemistry;

    }
    get id() {
        return this._id;
    }
    set id(newid) {
        if (newid == parseInt(newid)) {
            if (newage > 0) {
                this._id = newid;
            }
            else {
                console.log("loi");
            }
        }
        else {
            console.log("loi");
        }
    }
    get math() {
        return this_math
    }
    set math(newmath) {
        if (newmath>0) {
            this._math=newmath
        }
        else {
            console.log("loi");
        }
    }
};
let abc = new student("lanh", 16, "Ha Noi", 1, 8, 9,10)
console.log(abc._math);




let m = [1,2,3,4,5,6,"hh", "9",80,100];
let result = m.filter(item => typeof(item)==="number");
console.log(result);


let a =  "High knowledge, high return";
let b = a.split(" ")
console.log(b);
let c = a.toLowerCase()
console.log(c);
