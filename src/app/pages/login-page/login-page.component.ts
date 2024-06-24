import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  private router = inject(Router)
  private authService = inject(AuthService)
  private fb =inject (FormBuilder)
  loading: boolean = false;
  loginForm : FormGroup ;

  constructor(){
      this.loginForm =  new FormGroup({
        username: new FormControl("",[Validators.required]),
        passwod: new FormControl("",[Validators.required,Validators.minLength(4)]),
      
      })
    }
  


  ngOnInit() {
    this.checkAuth()
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.minLength(1),

      ]
      ],
      password: ['', [
        Validators.required,
        Validators.minLength(1),

      ]
      ],


    })
  }

  login() {
    this.loading = true
    if (this.loginForm.valid) {
      const value = this.loginForm.value;
      this.authService.authentication(value).subscribe({
        next: (resp) => {
          
          sessionStorage.setItem('isConnected', 'true');
          if (resp.status === 1) {
            if(resp.resultat.role =="AGENCE"){
              this.router.navigateByUrl('admin');
              this.authService.storeToken(resp.resultat.accessToken);
            this.authService.storeRefreshToken(resp.resultat.refreshToken);
            }else {
              this.router.navigateByUrl('compte/home');
              this.authService.storeToken(resp.resultat.accessToken);
              this.authService.storeRefreshToken(resp.resultat.refreshToken);
            }
            

            Swal.fire({
              icon: "success",
              text: resp.message,
              showConfirmButton: false,
              timer: 1500
            });
            
            
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
   checkAuth() {
   if (this.authService.isLoggedIn()) {
      this.router.navigate(['/compte/home'])
    }

  }

}
