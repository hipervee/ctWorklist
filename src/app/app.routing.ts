import { AggridComponent } from './components/aggrid/aggrid.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GridComponent } from './grid/grid.component';
export const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'grid', component: GridComponent },   
    { path: 'aggrid', component: AggridComponent },   
];

