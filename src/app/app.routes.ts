import { Routes } from '@angular/router';
import { CarroslistComponent } from './components/carros/carroslist/carroslist.component';
import { PrincipalComponent } from './components/carros/principal/principal.component';

export const routes: Routes = [
    {path: "", redirectTo: "principal", pathMatch: "full"},
    {path: "carros", component: CarroslistComponent},
    {path: "principal", component: PrincipalComponent}
];
