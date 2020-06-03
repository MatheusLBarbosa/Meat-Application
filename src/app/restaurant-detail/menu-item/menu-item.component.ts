import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  menuItens: MenuItem[]

  constructor() { }

  ngOnInit() {
  }

}
