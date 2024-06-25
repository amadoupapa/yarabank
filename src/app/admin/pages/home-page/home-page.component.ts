import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import Swal from 'sweetalert2';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  private router = inject(Router)
  private authService = inject(AuthService)
  msg!: string;
  data:any;
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


 



     
  


  ngOnInit() {
    this.getList()
  }

  getList() {
  
    this.authService.getOperation().subscribe({
      next: (resp) => {
         this.data=resp.resultat 
         console.log(this.data)
      },
      error: (err) => {
      
           this.msg= err.error.message
      },

    })
  }

}
