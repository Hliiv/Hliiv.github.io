
let cars = ["Toyota", "Honda", "Ford", "Chevrolet","BMW" ];



let carsObj = [
  {
    "brand": "Toyota",
    "color": "Red",
    "year": 2020,
    "price": 25000,
    "isBought": true
  },
  {
    "brand": "Honda",
    "color": "Blue",
    "year": 2019,
    "price": 22000,
    "isBought": false
  },
  {
    "brand": "Ford",
    "color": "Black",
    "year": 2018,
    "price": 20000,
    "isBought": true
  },
  {
    "brand": "Chevrolet",
    "color": "Silver",
    "year": 2021,
    "price": 28000,
    "isBought": false
  },
  {
    "brand": "BMW",
    "color": "White",
    "year": 2022,
    "price": 35000,
    "isBought": true
  }
];

console.log (carsObj);

for (let i = 0; i < carsObj.length; i++) {
  if (!carsObj[i].isBought) {
    console.log("Brand:", carsObj[i].brand);
    console.log("Color:", carsObj[i].color);
    console.log("Year:", carsObj[i].year);
    console.log("Price:", carsObj[i].price);
    console.log("-------------------------");
  }
}
