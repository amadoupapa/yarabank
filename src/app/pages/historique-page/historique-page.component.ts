import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgFor, NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-historique-page',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './historique-page.component.html',
  styleUrl: './historique-page.component.scss'
})
export class HistoriquePageComponent {

  show:boolean=false
  msg!: string;
  data:any;
  private router = inject(Router)
  private authService = inject(AuthService)

  display(){
    this.show=!this.show;
  }

  ngOnInit() {
   
    this.getBalanceList() 
  }

  getList() {
  
    this.authService.getMyOperation().subscribe({
      next: (resp) => {
         this.data=resp.resultat 
         console.log(this.data)
      },
      error: (err) => {
      
           this.msg= err.error.message
      },

    })
  }

  getBalanceList() {
  
    this.authService.getbalance().subscribe({
      next: (resp) => {
         this.data=resp.resultat 
      },
      error: (err) => {
      
           this.msg= err.error.message
      },

    })
  }

}
