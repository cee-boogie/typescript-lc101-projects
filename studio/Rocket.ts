import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';

export class Rocket {
  name: string;
  totalCapacityKg: number;
  cargoItems: [];
  astronauts: [];
  constructor(name: string, totalCapacityKg: number) {
      this.name = name;
      this.totalCapacityKg = totalCapacityKg;
  }  
  sumMass( items: Payload[] ): number {
      let sumItems: number = 0;
      for (let item of items){
          sumItems += item.massKg;
      }
      return sumItems;
  }
  currentMassKg(): number {
    return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
  }
  canAdd(item: Payload): boolean {
      if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
          return true;
      }
  }
  addCargo(cargo: Cargo): boolean {
      if (this.canAdd(cargo)) {
          this.cargoItems.push(cargo);
          return true;
      }
  }
  addAstronaut(astronaut: Astronaut): boolean {
      if (this.canAdd(astronaut)) {
          this.astronauts.push(astronaut);
          return true;
      }
  }
}

