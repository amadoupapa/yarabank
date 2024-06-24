import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonModule, NgFor } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-gestion-compte',
  standalone: true,
  imports: [NgFor],
  templateUrl: './gestion-compte.component.html',
  styleUrl: './gestion-compte.component.scss'
})
export class GestionCompteComponent {

  private router = inject(Router)
  private authService = inject(AuthService)
  private fb =inject (FormBuilder)
  loading: boolean = false;
  msg!: string;
  data:any;



     
  


  ngOnInit() {
    this.getList()
  }

  

  getList() {
  
      this.authService.getCourantloste().subscribe({
        next: (resp) => {
           this.data=resp.resultat 
           console.log(this.data)
        },
        error: (err) => {
          this.loading = false
             this.msg= err.error.message
        },

      })
    }

  }
   

  


