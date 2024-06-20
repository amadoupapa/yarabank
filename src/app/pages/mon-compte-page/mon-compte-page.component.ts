import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mon-compte-page',
  standalone: true,
  imports: [RouterLink,RouterOutlet, RouterLinkActive],
  templateUrl: './mon-compte-page.component.html',
  styleUrl: './mon-compte-page.component.scss'
})
export class MonComptePageComponent {

}
