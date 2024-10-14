import { HomeComponent } from './home/home.component';
import { SpendenformularComponent } from './spendenformular/spendenformular.component';
import { UnsereMissionComponent } from './unsere-mission/unsere-mission.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { Routes } from '@angular/router';
import { GespendetComponent } from './gespendet/gespendet.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'spendenformular', component: SpendenformularComponent },
    { path: 'gespendet', component: GespendetComponent },
    { path: 'unsere-mission', component: UnsereMissionComponent },
    { path: 'impressum', component: ImpressumComponent },
    { path: '', component: HomeComponent },
];
