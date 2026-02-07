import { Routes } from '@angular/router';
import { UserComponent } from './components/user-component/user-component';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserComponent },
];
