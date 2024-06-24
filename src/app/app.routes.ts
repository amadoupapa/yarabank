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
import { MyHistoriqueComponent } from './pages/my-historique/my-historique.component';
import { GestionPretComponent } from './admin/pages/gestion-pret/gestion-pret.component';
import { GestionClientComponent } from './admin/pages/gestion-client/gestion-client.component';
import { GestionCompteComponent } from './admin/pages/gestion-compte/gestion-compte.component';
import { AuthGaurd,  } from './services/auth-Guard';

export const routes: Routes = [

    // {
    //     path: 'admin',
    //     loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule),
    //   },
    //   {
    //     path: '', loadChildren: () => import('../app/components/login/login.module').then(m => m.LoginModule),
    //   },
  
  
    {
    path: '',
    component: SplashPageComponent,
  },
  {
    path: 'valider',
    component: ValiderPageComponent,
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
    path: 'courant',
    component: GestionPretComponent,
  },
  {
    path: 'epargne',
    component: GestionClientComponent,
  },
  {
    path: 'comptes',
    component: GestionCompteComponent,
  },

  
  {
    path: 'admin',
    component: HomePageComponent,
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
        path: 'myhistorique',
        component: MyHistoriqueComponent,
      },
      {
        path: 'operation',
        component: HomeComponent,
      },

     
    ],
   canActivate :[AuthGaurd]
  }, 
];
