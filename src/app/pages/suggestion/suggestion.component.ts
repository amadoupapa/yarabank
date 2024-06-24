import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-suggestion',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './suggestion.component.html',
  styleUrl: './suggestion.component.scss'
})
export class SuggestionComponent {
  private router = inject(Router)
  private authService = inject(AuthService)
  private fb =inject (FormBuilder)
  loading: boolean = false;
  sigInForm : FormGroup ;


  constructor(){

    this.sigInForm =  new FormGroup({
      fullName: new FormControl("",[Validators.required]),
      message: new FormControl("",[Validators.required,Validators.minLength(4)]),
     
    
    })
  }
  handlerSuggestion() {
    Swal.fire({
      title: "Suggestion",
      text: "Voulez-vous vraiment envoyer votre  suggestion ?",
      showCancelButton: true,
      cancelButtonText: 'Non',
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Oui"
    }).then((result) => {
      if (result.isConfirmed) {
        this.suggestion()
      }
    });
  }



  suggestion() {
    this.loading = true
    if (this.sigInForm.valid) {
      const value = this.sigInForm.value;
      this.authService.suggestion(value).subscribe({
        next: (resp) => {
          if (resp.status === 1) {
            Swal.fire({
              icon: "success",
              text: resp.message,
              showConfirmButton: false,
              timer: 1500
            });
            this.router.navigateByUrl('');
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




