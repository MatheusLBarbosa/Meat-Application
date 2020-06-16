import { NgModule } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantesService } from "app/restaurantes/restaurantes.service";
import { OrderService } from "app/order/order.service";

@NgModule({
    providers: [ShoppingCartService, RestaurantesService, OrderService]
})
export class CoreModule {

}