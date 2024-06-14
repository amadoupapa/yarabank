import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DepotFormComponent } from "../../components/depot-form/depot-form.component";
import { TransfertFormComponent } from "../../components/transfert-form/transfert-form.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [RouterLink, DepotFormComponent, TransfertFormComponent]
})
export class HomeComponent {

  private router = inject(Router);

  
  @ViewChild('modal') modal?:ElementRef;

  goToDepot(){
    this.router.navigateByUrl('/depot');
  }

  goToTransfert(){
    this.router.navigateByUrl('/transfert');
  }

  openDepotModal(){
    const modalTrigger = document.getElementById('depotModalBtn');
    if (modalTrigger) {
      modalTrigger.click();
    }
  }

  openModal(buttonId:string){
    const modalTrigger = document.getElementById(buttonId);
    if (modalTrigger) {
      modalTrigger.click();
    }
  }
  openTransfertModal(){
    const modalTrigger = document.getElementById('transfertModalBtn');
    if (modalTrigger) {
      modalTrigger.click();
    }
  
  }

}
