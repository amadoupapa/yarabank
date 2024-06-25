import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-compte',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './compte.component.html',
  styleUrl: './compte.component.scss'
})
export class CompteComponent {

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
      title: "Validation ",
      text: "Voulez-vous vraiment valider cette Operation ?",
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
      this.authService.activationOperation(id).subscribe({
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
  
      this.authService.getOperation().subscribe({
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
   

  


