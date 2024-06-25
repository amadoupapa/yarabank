import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgFor, NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-home-mon-compte-page',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './home-mon-compte-page.component.html',
  styleUrl: './home-mon-compte-page.component.scss'
})
export class HomeMonComptePageComponent {
  show:boolean=false
  msg!: string;
  data:any;
  balance:any;
  private router = inject(Router)
  private authService = inject(AuthService)

  display(){
    this.show=!this.show;
  }

  ngOnInit() {
    this.getList()
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
         this.balance=resp.resultat 
         console.log(this.balance)
      },
      error: (err) => {
      
           this.msg= err.error.message
      },

    })
  }

}
