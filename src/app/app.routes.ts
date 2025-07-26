import { Routes } from '@angular/router';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';

export const routes: Routes = [
    { path: '', component: ContactDetailsComponent },
    { path: 'contact/:id', component: ContactDetailsComponent },
    { path: '**', redirectTo: '' }
];
