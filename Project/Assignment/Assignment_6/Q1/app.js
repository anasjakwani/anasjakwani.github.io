var itemsArray = [
    {
        name: "juice",
        price: 50,
        quantity: 3
    }, {
        name: "cookie",
        price: 30,
        quantity: 9
    }, {
        name: "shirt",
        price: 880,
        quantity: 1
    }, {
        name: "pen",
        price: 100,
        quantity: 2
    }];

var juice = itemsArray[0].price * itemsArray[0].quantity;
console.log(itemsArray[0].name, itemsArray[0].price, "*", itemsArray[0].quantity, "", "=", juice);

var cookie = itemsArray[1].price * itemsArray[1].quantity;
console.log(itemsArray[1].name, itemsArray[1].price, "*", itemsArray[1].quantity, "", "=", cookie);

var shirt = itemsArray[2].price * itemsArray[2].quantity;
console.log(itemsArray[2].name, itemsArray[2].price, "*", itemsArray[2].quantity, "", "=", shirt);

var pen = itemsArray[3].price * itemsArray[3].quantity;
console.log(itemsArray[3].name, itemsArray[3].price, "*", itemsArray[3].quantity, "", "=", pen);

console.log("Total", " ", juice + cookie + shirt + pen);