import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DepotPageComponent } from './pages/depot-page/depot-page.component';
import { TransfertPageComponent } from './pages/transfert-page/transfert-page.component';

export const routes: Routes = [
    {
        path:'', component: HomeComponent
    },
    {
        path:'depot', component: DepotPageComponent
    },
    {
        path:'transfert', component: TransfertPageComponent
    }
];
