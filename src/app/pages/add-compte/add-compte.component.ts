import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-compte',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],  templateUrl: './add-compte.component.html',
  styleUrl: './add-compte.component.scss'
})
export class AddCompteComponent {

  private router = inject(Router)
  private authService = inject(AuthService)
  private fb =inject (FormBuilder)
  loading: boolean = false;
  sigInForm : FormGroup ;

  constructor(){

      this.sigInForm =  new FormGroup({
        idAccount: new FormControl("",[Validators.required]),
        accountType: new FormControl("",[Validators.required]),
      
      })
    }
    handlerInscription() {
      Swal.fire({
        title: "Inscrption",
        text: "Voulez-vous vraiment vous inscrire ?",
        showCancelButton: true,
        cancelButtonText: 'Non',
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Oui"
      }).then((result) => {
        if (result.isConfirmed) {
          this.inscription()
        }
      });
    }

  
  
    inscription() {
      this.loading = true
      if (this.sigInForm.valid) {
        const value = this.sigInForm.value;
        console.log(value)
        this.authService.createExitCustomer(value).subscribe({
          next: (resp) => {
            if (resp.status === 1) {
              Swal.fire({
                icon: "success",
                text: resp.message,
                showConfirmButton: false,
                timer: 1500
              });
              this.router.navigateByUrl('valider');
              //this.router.navigateByUrl('login');
              this.loading = false
  
  
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
  
    }
     
  
  }
  



