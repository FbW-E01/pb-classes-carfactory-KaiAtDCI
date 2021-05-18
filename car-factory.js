// (1) Create a constructor function that can be used to create objects.

function Car(make, model, year) {
    this.type = 'car';
    this.make = make;
    this.model = model;
    this.year = year;
}

const car = new Car('The Car Factory', 'The Model', 2022);
console.log (car);

// (2) Use your function to create 10 different cars. Store all of them inside a "garage" array.

const garage = new Array(10);
for (let carNumber = 0; carNumber < 10; carNumber++) {
    const make = 'The Car Company';
    const model = `Model ${carNumber}`;
    const year = 2000 + Math.floor(Math.random() * 9 + 1);
    const newCar = new Car(make, model, year);
    garage.push(newCar);
}
console.log(garage);

