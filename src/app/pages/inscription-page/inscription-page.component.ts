import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inscription-page',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './inscription-page.component.html',
  styleUrl: './inscription-page.component.scss'
})
export class InscriptionPageComponent {
  private router = inject(Router)
  private authService = inject(AuthService)
  private fb =inject (FormBuilder)
  loading: boolean = false;
  sigInForm : FormGroup ;

  constructor(){

      this.sigInForm =  new FormGroup({
        lastName: new FormControl("",[Validators.required]),
        firstName: new FormControl("",[Validators.required,Validators.minLength(4)]),
        town: new FormControl("",[Validators.required]),
        phone: new FormControl("",[Validators.required,Validators.minLength(4)]),
        username: new FormControl("",[Validators.required]),
        password: new FormControl("",[Validators.required,Validators.minLength(4)]),
        city: new FormControl("",[Validators.required]),
        country: new FormControl("",[Validators.required,Validators.minLength(4)]),
        mail: new FormControl("",[Validators.required]),
        accountType: new FormControl("",[Validators.required]),
        dateOfBirth: new FormControl("",[Validators.required,Validators.minLength(4)]),
      
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
        this.authService.createCustomer(value).subscribe({
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
  


