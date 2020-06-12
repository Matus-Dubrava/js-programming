const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// help with inferrence when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
carMakers.push(100);

// help with 'map'
carMakers.map((car: string): string => {
    return car.toUpperCase();
});

// flexible types
const flexibleDates: (Date | string)[] = [new Date(), '2010-10-10'];
flexibleDates.push('2011-10-10');
flexibleDates.push(new Date());
