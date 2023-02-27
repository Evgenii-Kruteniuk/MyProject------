const list = [
  {
    name: "butter",
    amount: 2,
    price: 90,

    func1() {
      let butter = this.amount * this.price;
      return butter;
    },
  },
  {
    name: "milk",
    amount: 3,
    price: 60,

    func2() {
      let milk = this.amount * this.price;
      return milk;
    },
  },
  {
    name: "bread",
    amount: 6,
    price: 25,

    func3() {
      let bread = this.amount * this.price;
      return bread;
    },
  },
];

console.log(list[0].func1());
console.log(list[1].func2());
console.log(list[2].func3());

function totalSum() {
  const sum = list[0].func1() + list[1].func2() + list[2].func3();
  return sum;
}
alert(totalSum());

const totalPrice = [list[0].func1(), list[1].func2(), list[2].func3()];
const maxEl = Math.max(...totalPrice);
console.log(maxEl);
