import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-spendenformular',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './spendenformular.component.html',
  styleUrl: './spendenformular.component.scss'
})
export class SpendenformularComponent {
  spendenFormular = this.fb.group( {
    donationType: [""],
    destination:[""],
    email:[""],
    handover:[""],
    adresse: this.fb.group({
      vorName:[""],
      nachName:[""],
      straße:[""],
      stadt:[""],
      plz:["", [this.zipCodeValidator(/0213/i)]],
    })
  })

  // Deaktiviert Adressfeld bei Auswahl Übergabe an Geschäftsstelle
  constructor(private fb: FormBuilder) {
    this.spendenFormular.get('handover')?.valueChanges.subscribe((value) => {
      if(value === 'geschäftsstelle') {
        this.spendenFormular.get('adresse')?.disable();
      } else {
        this.spendenFormular.get('adresse')?.enable();
      }
    });
  }

  onSubmit(): void {
    console.log("Registrierte Spende:", this.spendenFormular.value);
  }

// Überprüfung Postleitzahl
zipCodeValidator(zipCode: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = zipCode.test(control.value);
    return forbidden ? {forbiddenZipCode: {value: control.value}} : null;
  };
}

}
