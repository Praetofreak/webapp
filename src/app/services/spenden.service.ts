import { Injectable } from '@angular/core';
import { SpendeModel } from '../interfaces/spende';

@Injectable({
  providedIn: 'root',
})
export class SpendenService {
  spenden: SpendeModel[] = [
  ];

  addSpende(spende: SpendeModel) {
    spende.id = this.spenden.length + 1;
    this.spenden.push(spende);
    console.log(this.spenden);
    console.log(spende)
  }
}
