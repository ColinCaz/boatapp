import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Boat } from './boat';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const boats = [
      { id: 1, name: "Santa Maria", description: "Description1.", size: 24 },
      { id: 2, name: "Mayflower", description: "Description2.", size: 33 },
      { id: 3, name: "Titanic", description: "Description3.", size: 269 }
    ];
    return {boats};
  }

  genId(boats: Boat[]): number {
    return boats.length > 0 ? Math.max(...boats.map(boat => boat.id)) + 1 : 1;
  }
}