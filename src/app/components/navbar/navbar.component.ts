import { NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Route,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  private router = inject(Router);
  showNav = true;
  private hiddenRoutes = ['/compte', '/admin','/login','/inscription'];
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // cache navbar si l'url inclue un elt de hiddenRoutes
        this.showNav = !this.hiddenRoutes.includes(event.url);
      }
    });
  }
}
