const list = [
  {
    name: "butter",
    amount: 2,
    bay: true,
  },
  {
    name: "milk",
    amount: 3,
    bay: false,
  },
  {
    name: "bread",
    amount: 6,
    bay: true,
  },
  {
    name: "juice",
    amount: 10,
    bay: false,
  },
];

let arr = [];
for (elem of list) {
  if (elem.bay === false) {
    arr.unshift(elem);
  } else {
    arr.push(elem);
  }
}

console.log(arr);

function returnProduct(unit) {
  for (product of arr) {
    if (unit === product.name) {
      console.log("Товар уже куплен");
    }
  }
}
returnProduct("butter");
