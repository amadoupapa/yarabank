import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-depot-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './depot-form.component.html',
  styleUrl: './depot-form.component.scss'
})
export class DepotFormComponent {
  depotForm!:FormGroup;
  private router = inject(Router)
  private authService = inject(AuthService)
  private fb =inject (FormBuilder)
  loading: boolean = false;
  constructor(){

      this.depotForm =  new FormGroup({
        accountNumber: new FormControl("",[Validators.required]),
        amount: new FormControl("",[Validators.required,Validators.minLength(4)]),
      
      })
    }
    handlerdepot() {
      Swal.fire({
        title: "Depot d'argent",
        text: "Voulez-vous vraiment faire un depot ?",
        showCancelButton: true,
        cancelButtonText: 'Non',
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Oui"
      }).then((result) => {
        if (result.isConfirmed) {
          this.depot()
        }
      });
    }

  
  
    depot() {
      this.loading = true
      if (this.depotForm.valid) {
        const value = this.depotForm.value;
        this.authService.depot(value).subscribe({
          next: (resp) => {
            if (resp.status === 1) {
              Swal.fire({
                icon: "success",
                text: resp.message,
                showConfirmButton: false,
                timer: 1500
              });
              this.router.navigateByUrl('compte/home');
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
