// Importing Vehicle and Wheel classes
import AbleToTow from '../interfaces/AbleToTow.js';
import Car from './Car.js';
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],


  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()]
    } else {
      this.wheels = wheels;
    }

    // TODO: Implement the wheelie method
    // let name;
    // if (Vehicle.make && Vehicle.model) {
    //   name = Vehicle.make + " " + Vehicle.model
    // } else {
    //   name = "Vehicle"
    // }
    // if (Vehicle.wheelie <= this.wheels) {
    //   console.log("Motorbike is doing a wheelie")
    // } else {
    // }

  }

  // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
  wheelie () {
  console.log("Motorbike [make] [model] is doing a wheelie!");
  }





  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void {

    super.printDetails();


    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`wheels: ${this.wheels}) number of wheels`);
          }

}

// Export the Motorbike class as the default export
export default Motorbike;

