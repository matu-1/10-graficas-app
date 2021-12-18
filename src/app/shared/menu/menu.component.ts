import { Component, OnInit } from '@angular/core';

interface MenuItem {
  label: string;
  routerLink: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  menu: MenuItem[] = [
    {
      label: 'Barra',
      routerLink: '/barra',
    },
    {
      label: 'Barra Doble',
      routerLink: '/barra-doble',
    },
    {
      label: 'Dona',
      routerLink: '/dona',
    },
    {
      label: 'Dona Http',
      routerLink: '/dona-http',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
