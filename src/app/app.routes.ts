import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoriquePageComponent } from './pages/historique-page/historique-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { InscriptionPageComponent } from './pages/inscription-page/inscription-page.component';
import { HomePageComponent } from './admin/pages/home-page/home-page.component';
import { SplashPageComponent } from './pages/splash-page/splash-page.component';
import { MonComptePageComponent } from './pages/mon-compte-page/mon-compte-page.component';
import { ValiderPageComponent } from './pages/valider-page/valider-page.component';
import { HomeMonComptePageComponent } from './components/home-mon-compte-page/home-mon-compte-page.component';

export const routes: Routes = [
  {
    path: '',
    component: SplashPageComponent,
  },
  {
    path: 'valider',
    component: ValiderPageComponent,
  },
  {
    path: 'compte',
    component: MonComptePageComponent,
    children: [
      {
        path: 'home',
        component: HomeMonComptePageComponent,
      },
      {
        path: 'operation',
        component: HomeComponent,
      },
    ],
  },
  {
    path: 'historiques',
    component: HistoriquePageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'inscription',
    component: InscriptionPageComponent,
  },

  {
    path: 'historique',
    component: HistoriquePageComponent,
  },
  {
    path: 'admin',
    component: HomePageComponent,
  },
];
