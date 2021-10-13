import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  rutas = [
    {nombre: 'Inicio', routerLink: '/inicio', clase: 'anchor'},
    {nombre: 'Iniciar Sesión', routerLink: '/login', clase: 'anchor'}
  ]
  constructor() { }
  
  ngOnInit(): void {
  }

}
