import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
export const appRoutes: Routes = [
    { path: '', component: LoginComponent },
];

