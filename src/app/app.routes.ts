import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoriquePageComponent } from './pages/historique-page/historique-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { InscriptionPageComponent } from './pages/inscription-page/inscription-page.component';
import { HomePageComponent } from './admin/pages/home-page/home-page.component';

export const routes: Routes = [
    {
        path:'', component: HomeComponent
    },
    {
        path:'historiques', component: HistoriquePageComponent
    },
    {
        path:'login', component: LoginPageComponent
    },
    {
        path:'inscription', component: InscriptionPageComponent
    },

    {
        path:'historique', component: HistoriquePageComponent
    },
    {
        path:'admin', component: HomePageComponent
    },
   
];
