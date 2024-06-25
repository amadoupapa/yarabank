import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DepotFormComponent } from "../../components/depot-form/depot-form.component";
import { TransfertFormComponent } from "../../components/transfert-form/transfert-form.component";
import { RetraitFormComponent } from '../../components/retrait-form/retrait-form.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [RouterLink, DepotFormComponent, TransfertFormComponent,RetraitFormComponent]
})
export class HomeComponent {
  
  openModal(buttonId:string){
    const modalTrigger = document.getElementById(buttonId);
    if (modalTrigger) {
      modalTrigger.click();
    }
  
  
  }

}
