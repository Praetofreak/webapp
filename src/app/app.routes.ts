import { HomeComponent } from './home/home.component';
import { SpendenformularComponent } from './spendenformular/spendenformular.component';
import { UnsereMissionComponent } from './unsere-mission/unsere-mission.component';
import { ErfolgsseiteComponent } from './erfolgsseite/erfolgsseite.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'spendenformular', component: SpendenformularComponent },
    { path: 'unsere-mission', component: UnsereMissionComponent },
    { path: 'erfolgsseite', component: ErfolgsseiteComponent },
    { path: 'impressum', component: ImpressumComponent },
    { path: '', component: HomeComponent },
];
