const car = {
    brand: 'BMW',
    year: 1992,
    avgSpeed: 320,
    drivers: [
        'Max'
    ],
    showInfo() {
        for (const key in car) {
            if(typeof car[key] !== 'function') {
                console.log(`Value of ${key} is ${car[key]}`);
            }
        }
    },
    addDriver(driverName) {
        this.drivers.push(driverName)
    },
    checkDriver(driverName) {
        return this.drivers.includes(driverName)
    }
}
car.addDriver('Oleg');
// console.log(car.checkDriver('Oleg'));
car.showInfo();