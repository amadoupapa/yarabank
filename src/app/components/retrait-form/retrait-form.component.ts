import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-retrait-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './retrait-form.component.html',
  styleUrl: './retrait-form.component.scss'
})
export class RetraitFormComponent {
  retraitForm!:FormGroup;
  private fb = inject(FormBuilder);
  ngOnInit(): void {
      this.retraitForm = this.fb.group({
        montantDepot: ['',[Validators.required,Validators.pattern('^-?\\d*\\.?\\d+$')]]
      })
  }

  onSubmit(){
    if(this.retraitForm.valid){
      console.log('traitement formulaire non implemente')
    }else{
      alert('Veuillez saisir un montant valide !');
    }
  }
}
