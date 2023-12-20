import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  isActiveRoute(route: string): boolean {
    return this.router.isActive(route, true);
  }

  isHome(): boolean {
    return this.router.url === '/';
  }

  isAboutPage(): boolean {
    return this.router.url === '/about-us';
  }

  isServices(): boolean {
    return this.router.url === '/service';
  }

  isMenu(): boolean {
    return this.router.url === '/menu';
  }

  isReservation(): boolean {
    return this.router.url === '/reservation';
  }

  isTeam(): boolean {
    return this.router.url === '/team';
  }

  isContacts(): boolean {
    return this.router.url === '/contacts';
  }

}
