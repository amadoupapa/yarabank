import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common'; '@angular/forms';

@Component({
  selector: 'app-transfert-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './transfert-form.component.html',
  styleUrl: './transfert-form.component.scss',
})
export class TransfertFormComponent  {
  transfertForm!: FormGroup;
  private router = inject(Router)
  private authService = inject(AuthService)
  private fb =inject (FormBuilder)
  loading: boolean = false;
  constructor(){

      this.transfertForm =  new FormGroup({
        sender: new FormControl("",[Validators.required]),
        receiver: new FormControl("",[Validators.required]),
        amount: new FormControl("",[Validators.required,Validators.minLength(4)]),
      
      })
    }
    handlerTransfert() {
      Swal.fire({
        title: "Transfert d'argent",
        text: "Voulez-vous vraiment faire un transfert ?",
        showCancelButton: true,
        cancelButtonText: 'Non',
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Oui"
      }).then((result) => {
        if (result.isConfirmed) {
          this.transfert()
        }
      });
    }

  
  
    transfert() {
      this.loading = true
      if (this.transfertForm.valid) {
        const value = this.transfertForm.value;
        this.authService.transfert(value).subscribe({
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
