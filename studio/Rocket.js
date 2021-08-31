"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var sumItems = 0;
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            sumItems += item.massKg;
        }
        return sumItems;
    };
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
