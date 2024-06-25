import { NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Route,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  private router = inject(Router)
  private authService = inject(AuthService)
  showNav = true;
  view = false;
  private hiddenRoutes = ['/admin','/login','/inscription'];
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // cache navbar si l'url inclue un elt de hiddenRoutes
        this.showNav = !this.hiddenRoutes.includes(event.url);
      }
    
    });
    this.checkAuth()

  }

  signout() {
    Swal.fire({
      title: "Déconnexion",
      text: "Voulez-vous vraiment vous déconnectez ?",
      showCancelButton: true,
      cancelButtonText: 'Non',
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Oui"
    }).then((result) => {
      if (result.isConfirmed) {
        this.handleDeconnexion()
      }
    });
  }



  handleDeconnexion(){
    this.authService.signout().subscribe({
      next: (data) => {
        if(data.status===1){
          Swal.fire({
            icon: "success",
            text:data.message,
            showConfirmButton: false,
            timer: 1000
          });
        localStorage.clear();
        this.router.navigateByUrl('login')
         sessionStorage.setItem('isConnected', 'false');
        }
      },
      error: (err) => {
        localStorage.clear();
        this.router.navigateByUrl('login')
        sessionStorage.setItem('isConnected', 'false');

      }
    })
  }
  checkAuth() {
    if (this.authService.isLoggedIn()) {
      this.view =!this.view;
     }
 
   }
}
