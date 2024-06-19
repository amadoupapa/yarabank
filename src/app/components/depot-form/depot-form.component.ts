import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-depot-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './depot-form.component.html',
  styleUrl: './depot-form.component.scss'
})
export class DepotFormComponent  implements OnInit{
  depotForm!:FormGroup;
  private fb = inject(FormBuilder);
  ngOnInit(): void {
      this.depotForm = this.fb.group({
        montantDepot: ['',[Validators.required,Validators.pattern('^-?\\d*\\.?\\d+$')]]
      })
  }

  onSubmit(){
    if(this.depotForm.valid){
      console.log('traitement formulaire non implemente')
    }else{
      alert('Veuillez saisir un montant valide !');
    }
  }

  

}
