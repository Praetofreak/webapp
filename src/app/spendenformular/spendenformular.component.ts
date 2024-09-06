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
    mailAdresse:"",
    abgabeOrt:"",
    vorName:"",
    nachName:"",
    straße:"",
    stadt:"",
    plz:"",
  })
  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    console.log("Registrierte Spende:", this.spendenFormular.value);
  }
}
