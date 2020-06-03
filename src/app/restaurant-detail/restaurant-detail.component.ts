import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'app/restaurantes/restaurante/restaurante.model';
import { RestaurantesService } from 'app/restaurantes/restaurantes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurante

  constructor(private restaurantService: RestaurantesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRestaurantById()
  }

  getRestaurantById() {
    this.restaurantService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant)
  }

}
