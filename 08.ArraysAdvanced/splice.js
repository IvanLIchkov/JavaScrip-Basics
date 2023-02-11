let cars = ['bmw', 'mercedes', 'toyota', 'vw'];
//splice mutates the original array

//remove single element at the middle
let removedCars =  cars.splice(2, 1);
console.log(cars);
console.log(removedCars);

//Remove two elemetns at the middle 
cars = ['bmw', 'mercedes', 'toyota', 'vw'];
let middleCars = cars.splice(1, 2);
console.log(cars);
console.log(middleCars);

//add elements in the middle
cars = ['bmw', 'mercedes', 'toyota', 'vw'];
cars.splice(1, 0, 'lada', 'trabant')
console.log(cars);

//combine add and remove
cars.splice(1,2 , 'honda');
console.log(cars);