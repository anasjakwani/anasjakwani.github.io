function Obj(name, gender, address, profe) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.profe =profe;
};


function user() {
    var n1 = document.getElementById("name").value;
    var g1 = document.getElementById("gender").value;
    var ad = document.getElementById("address").value;
    var prf= document.getElementById("profe").value;
    console.log(n1, g1, ad, prf);
    var obj1 = new Obj(n1, g1, ad, prf);
    console.log(obj1);
    var arr = [];
    arr.push(obj1);
    console.log(arr);
};


