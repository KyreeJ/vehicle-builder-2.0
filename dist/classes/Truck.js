// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
class Truck extends Vehicle {
    constructor(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        super();
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        if (wheels.length !== 4) {
            this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
        }
        else {
            this.wheels = wheels;
        }
        this.towingCapacity = towingCapacity;
    }
    tow(vehicle) {
        let name;
        if (vehicle.make && vehicle.model) {
            name = vehicle.make + " " + vehicle.model;
        }
        else {
            name = "Vehicle";
        }
        if (vehicle.weight <= this.towingCapacity) {
            console.log('Vehicle is towed');
        }
        else {
            console.log('Vehicle is too heavy');
        }
    }
    printDetails() {
        super.printDetails();
        console.log(`VIN: ${this.vin}`);
        console.log(`Color: ${this.color}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight} lbs`);
        console.log(`Top Speed: ${this.topSpeed} mph`);
        console.log(`wheels: ${this.wheels} wheels`);
        console.log(`towingCapacity: ${this.towingCapacity}weight`);
    }
}
// Export the Truck class as the default export
export default Truck;
