import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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
        passwod: new FormControl("",[Validators.required,Validators.minLength(4)]),
        city: new FormControl("",[Validators.required]),
        country: new FormControl("",[Validators.required,Validators.minLength(4)]),
        mail: new FormControl("",[Validators.required]),
        dateOfBirth: new FormControl("",[Validators.required,Validators.minLength(4)]),
      
      })
    }

}
