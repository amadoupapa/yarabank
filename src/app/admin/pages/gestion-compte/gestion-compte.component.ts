import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-gestion-compte',
  standalone: true,
  imports: [NgFor,NgIf],
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

  activation(id :string) {
    Swal.fire({
      title: "Activation",
      text: "Voulez-vous vraiment actver cet compte ?",
      showCancelButton: true,
      cancelButtonText: 'Non',
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Oui"
    }).then((result) => {
      if (result.isConfirmed) {
       this.handlerActivation(id)
      }
    });
  }
  handlerActivation(id:string) {
    this.loading = true
      this.authService.activation(id).subscribe({
        next: (resp) => {
          if (resp.status === 1) {
            Swal.fire({
              icon: "success",
              text: resp.message,
              showConfirmButton: false,
              timer: 1500
            });
           
            this.loading = false
this.getList();

          }



        },
        error: (err) => {
          this.loading = false
            Swal.fire({
              icon: "error",
              text: err.error.message,
            });


        }

      }

      )
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
   

  


