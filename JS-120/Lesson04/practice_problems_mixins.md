1. If we have a Car class and a Truck class, how can you use the Speed object as a mix-in to make them goFast? How can you check whether your Car or Truck can now go fast?
    ```JavaScript
    const Speed = {
      goFast() {
        console.log(`I'm a ${this.constructor.name} and going super fast!`);
      }
    };

    class Car {
      goSlow() {
        console.log(`I'm safe and driving slow.`);
      }
    }
    Object.assign(Car.prototype, Speed);

    class Truck {
      goVerySlow() {
        console.log(`I'm a heavy truck and like going very slow.`);
      }
    }
    Object.assign(Truck.prototype, Speed);

    let myTruck = new Truck();
    let myCar = new Car();
    myTruck.goFast();
    myCar.goFast();
    console.log('goFast' in myTruck);
    ```
1. In the last question, we used a mix-in named Speed that contained a goFast method. We included the mix-in in the Car class and then called the goFast method from an instance of the Car class. You may have noticed that the string printed when we call goFast includes the name of the type of vehicle we are using. How is that done?

    The `goFast` method uses string interpolation and has a reference to `this.constructor.name`.  `this` will reference the calling object (say, myCar).  `this.constructor` will point to the function that created the object (in this case, `Car`).  The `name` property of functions returns the function name (as opposed to a reference to the function itself)

1. Ben and Alyssa are working on a vehicle management system. Thus far, they have created classes named Auto and Motorcycle to represent automobiles and motorcycles. After they noticed that the information and calculations performed was common to both vehicle types, they decided to break out the commonality into a separate class named WheeledVehicle. Their code, thus far, looks like this:

    ```JavaScript
    let VehicleWithEngine = {
      range() {
        return this.fuelCap *  this.fuelEfficiency;
      }, 

    };

    class WheeledVehicle {
      constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
        this.tires = tirePressure;
        this.fuelEfficiency = kmTravelledPerLiter;
        this.fuelCap = fuelCapInLiter;
      }

      tirePressure(tireIdx) {
        return this.tires[tireIdx];
      }

      inflateTire(tireIdx, pressure) {
        this.tires[tireIdx] = pressure;
      }
    }
    Object.assign(WheeledVehicle.prototype, VehicleWithEngine);

    class Catamaran {
      constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
        // catamaran specific logic

        this.propellerCount = propellerCount;
        this.hullCount = hullCount;
        this.fuelEfficiency = kmTravelledPerLiter;
        this.fuelCap = fuelCapInLiter;
      }
    }
    Object.assign(Catamaran.prototype, VehicleWithEngine);

    class Auto extends WheeledVehicle {
      constructor() {
        // the array represents tire pressure for four tires
        super([30,30,32,32], 50, 25.0);
      }
    }

    class Motorcycle extends WheeledVehicle {
      constructor() {
        // array represents tire pressure for two tires
        super([20,20], 80, 8.0);
      }
    }
    ```