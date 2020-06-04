import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from 'app/restaurantes/restaurantes.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(private restaurantsService: RestaurantesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getMenu()
  }

  getMenu(){
    this.menu = this.restaurantsService.menuOfRestaurants(this.route.parent.snapshot.params['id'])
  }

  addMenuItem(item: MenuItem){
    
  }

}
