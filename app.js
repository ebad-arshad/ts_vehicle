var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year, rented) {
        if (rented === void 0) { rented = false; }
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    Vehicle.prototype.getMake = function () {
        return this.make;
    };
    Vehicle.prototype.getModel = function () {
        return this.model;
    };
    Vehicle.prototype.getYear = function () {
        return this.year;
    };
    Vehicle.prototype.isRented = function () {
        return this.rented;
    };
    Vehicle.prototype.setRented = function (rented) {
        this.rented = rented;
    };
    Vehicle.prototype.rent = function () {
        if (this.isRented()) {
            console.log("Sorry, the ".concat(this.make, " ").concat(this.model, " is already rented."));
        }
        else {
            this.setRented(true);
            console.log("You have rented the ".concat(this.make, " ").concat(this.model, "."));
        }
    };
    Vehicle.prototype.return = function () {
        if (!this.isRented()) {
            console.log("You cannot return the ".concat(this.make, " ").concat(this.model, " because it has not been rented."));
        }
        else {
            this.setRented(false);
            console.log("You have returned the ".concat(this.make, " ").concat(this.model, "."));
        }
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, year, rented, numberOfDoors, numberOfSeats) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this.numberOfDoors = numberOfDoors;
        _this.numberOfSeats = numberOfSeats;
        return _this;
    }
    Car.prototype.rentalRate = function () {
        return 50;
    };
    Car.prototype.getNumberOfDoors = function () {
        return this.numberOfDoors;
    };
    Car.prototype.getNumberOfSeats = function () {
        return this.numberOfSeats;
    };
    return Car;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(make, model, year, rented, cargoCapacity) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this.cargoCapacity = cargoCapacity;
        return _this;
    }
    Truck.prototype.rentalRate = function () {
        return 75;
    };
    Truck.prototype.getCargoCapacity = function () {
        return this.cargoCapacity;
    };
    return Truck;
}(Vehicle));
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(make, model, year, rented, engineDisplacement) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this.engineDisplacement = engineDisplacement;
        return _this;
    }
    Motorcycle.prototype.rentalRate = function () {
        return 25;
    };
    Motorcycle.prototype.getEngineDisplacement = function () {
        return this.engineDisplacement;
    };
    return Motorcycle;
}(Vehicle));
