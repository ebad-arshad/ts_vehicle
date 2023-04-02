abstract class Vehicle {
    make: string;
    model: string;
    year: number;
    rented: boolean;
  
    constructor(make: string, model: string, year: number, rented: boolean = false) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.rented = rented;
    }
  
    getMake(): string {
      return this.make;
    }
  
    getModel(): string {
      return this.model;
    }
  
    getYear(): number {
      return this.year;
    }
  
    isRented(): boolean {
      return this.rented;
    }
  
    setRented(rented: boolean): void {
      this.rented = rented;
    }
  
    abstract rentalRate(): number;
  
    rent(): void {
      if (this.isRented()) {
        console.log(`Sorry, the ${this.make} ${this.model} is already rented.`);
      } else {
        this.setRented(true);
        console.log(`You have rented the ${this.make} ${this.model}.`);
      }
    }
  
    return(): void {
      if (!this.isRented()) {
        console.log(`You cannot return the ${this.make} ${this.model} because it has not been rented.`);
      } else {
        this.setRented(false);
        console.log(`You have returned the ${this.make} ${this.model}.`);
      }
    }
  }
  
  class Car extends Vehicle {
    numberOfDoors: number;
    numberOfSeats: number;
  
    constructor(make: string, model: string, year: number, rented: boolean, numberOfDoors: number, numberOfSeats: number) {
      super(make, model, year, rented);
      this.numberOfDoors = numberOfDoors;
      this.numberOfSeats = numberOfSeats;
    }
  
    rentalRate(): number {
      return 50;
    }
  
    getNumberOfDoors(): number {
      return this.numberOfDoors;
    }
  
    getNumberOfSeats(): number {
      return this.numberOfSeats;
    }
  }
  
  class Truck extends Vehicle {
    cargoCapacity: number;
  
    constructor(make: string, model: string, year: number, rented: boolean, cargoCapacity: number) {
      super(make, model, year, rented);
      this.cargoCapacity = cargoCapacity;
    }
  
    rentalRate(): number {
      return 75;
    }
  
    getCargoCapacity(): number {
      return this.cargoCapacity;
    }
  }
  
  class Motorcycle extends Vehicle {
    engineDisplacement: number;
  
    constructor(make: string, model: string, year: number, rented: boolean, engineDisplacement: number) {
      super(make, model, year, rented);
      this.engineDisplacement = engineDisplacement;
    }
  
    rentalRate(): number {
      return 25;
    }
  
    getEngineDisplacement(): number {
      return this.engineDisplacement;
    }
  }