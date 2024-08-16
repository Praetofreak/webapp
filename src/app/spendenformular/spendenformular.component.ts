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
  donationForm = this.fb.group( {
    artDerKleidung: "",
    krisenGebiet:"",
  })
  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    console.log("Registrierte Spende:", this.donationForm.value)
  }
}
