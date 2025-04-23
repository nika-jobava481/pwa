import { Routes } from '@angular/router';
import { InstallComponent } from './install/install.component';

export const routes: Routes = [
    { path: 'install', component: InstallComponent },
    { path: '', redirectTo: 'install', pathMatch: 'full' }
];
