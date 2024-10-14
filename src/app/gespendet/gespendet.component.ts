import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpendenService } from '../services/spenden.service';

@Component({
  selector: 'app-gespendet',
  standalone: true,
  imports: [],
  templateUrl: './gespendet.component.html',
  styleUrl: './gespendet.component.scss',
})
export class GespendetComponent {
  activatedRoute = inject(ActivatedRoute);
  spendenService = inject(SpendenService);
}
