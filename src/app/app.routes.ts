import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { RestaurantesComponent } from "./restaurantes/restaurantes.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'restaurantes', component: RestaurantesComponent},
    { path: 'restaurantes/:id', component: RestaurantDetailComponent}
]