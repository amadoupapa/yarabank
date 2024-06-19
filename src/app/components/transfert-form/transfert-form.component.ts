import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-transfert-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './transfert-form.component.html',
  styleUrl: './transfert-form.component.scss',
})
export class TransfertFormComponent implements OnInit {
  transfertForm!: FormGroup;
  private fb = inject(FormBuilder);
  ngOnInit(): void {
    this.transfertForm = this.fb.group({
      montantTransfert: [
        '',
        [Validators.required, Validators.pattern('^-?\\d*\\.?\\d+$')],
      ],
      numBeneficiaire: [
        '',
        [Validators.required, Validators.pattern('^-?\\d+$')],
      ],
    });
  }

  onSubmit() {
    if (this.transfertForm.valid) {
      alert('ok');
    } else {
      alert('saisi invalide');
    }
  }
}
