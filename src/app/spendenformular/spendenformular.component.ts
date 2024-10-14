import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SpendeModel } from '../interfaces/spende';
import { SpendenService } from '../services/spenden.service';

@Component({
  selector: 'app-spendenformular',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './spendenformular.component.html',
  styleUrl: './spendenformular.component.scss',
})
export class SpendenformularComponent {
  router = inject(Router);
  spendenService = inject(SpendenService);
  
  spendenFormular = this.fb.group({
    donationType: [''],
    destination: [''],
    email: [''],
    handover: [''],
    adresse: this.fb.group({
      vorName: [''],
      nachName: [''],
      strasse: [''],
      stadt: [''],
      plz: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(5),
          this.zipCodeValidator(/^0213/i),
        ],
      ],
    }),
  });

  // Deaktiviert Adressfeld bei Auswahl Übergabe an Geschäftsstelle
  constructor(private fb: FormBuilder) {
    this.spendenFormular.get('handover')?.valueChanges.subscribe((value) => {
      if (value === 'geschäftsstelle') {
        this.spendenFormular.get('adresse')?.disable();
      } else {
        this.spendenFormular.get('adresse')?.enable();
      }
    });
  }

  onSubmit() {
    if (this.spendenFormular.valid) {
      this.spendenService.addSpende(this.spendenFormular.value as SpendeModel);
      this.router.navigateByUrl('/gespendet');
    }
  }

  // Überprüfung Postleitzahl
  zipCodeValidator(zipCode: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const validZip = zipCode.test(control.value);
      return validZip ? null : { forbiddenZipCode: { value: control.value } };
    };
  }
}
