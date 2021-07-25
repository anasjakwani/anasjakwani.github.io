function Obj(name, gender, address, age) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.age =age;
};


var record1 = new Obj("Anas", "Male", "Karachi-Pakistan", 23);
var record2 = new Obj("Basit", "Male", "Lahore-Pakistan", 25);
var record3 = new Obj("Naveed", "Male", "Sialkot-Pakistan", 20);

console.log(record1);
console.log(record2);
console.log(record3);
