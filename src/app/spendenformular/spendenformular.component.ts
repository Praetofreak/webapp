import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-spendenformular',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './spendenformular.component.html',
  styleUrl: './spendenformular.component.scss'
})
export class SpendenformularComponent {
  spendenFormular = this.fb.group( {
    artDerKleidung: "",
    krisenGebiet:"",
    abgabeOrt:"",
    adresse:"",
  })
  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    console.log("Registrierte Spende:", this.spendenFormular.value);
  }
}
