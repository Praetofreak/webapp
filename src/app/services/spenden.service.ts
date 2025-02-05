import { Injectable } from '@angular/core';
import { SpendeModel } from '../interfaces/spende';

@Injectable({
  providedIn: 'root',
})
export class SpendenService {
  spenden: SpendeModel[] = [
    {
      id: 1,
      donationType: 'Clothes',
      destination: 'Local Shelter',
      email: 'donor@example.com',
      handover: 'In Person',
      adresse: {
        vorName: 'John',
        nachName: 'Doe',
        strasse: 'Main Street 1',
        stadt: 'Sample City',
        plz: '12345',
      },
    },
    {
      id: 2,
      donationType: 'Books',
      destination: 'Community Library',
      email: 'donor2@example.com',
      handover: 'Mail',
      adresse: {
        vorName: 'Jane',
        nachName: 'Smith',
        strasse: 'Second Street 2',
        stadt: 'Example Town',
        plz: '67890',
      },
    },
  ];

  addSpende(spende: SpendeModel) {
    spende.id = this.spenden.length + 1;
    this.spenden.push(spende);
    console.log(this.spenden);
    console.log(spende)
  }
}
