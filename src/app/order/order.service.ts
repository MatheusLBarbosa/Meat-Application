import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.module";
import { Order } from "./order.model";
import { Observable } from "rxjs/Observable";
import { Http, Headers, RequestOptions } from "@angular/http";
import { MEAT_API } from "../app.api"

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService, private http: Http) { }

    cartItems(): CartItem[] {
        return this.cartService.items;
    }

    itemsValue(): number {
        return this.cartService.total();
    }

    increaseQtd(item: CartItem) {
        this.cartService.increaseQtd(item);
    }

    decreaseQtd(item: CartItem) {
        this.cartService.decreaseQtd(item);
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item);
    }

    checkOrder(order: Order): Observable<string> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order),
            new RequestOptions({ headers: headers }))
            .map(response => response.json())
            .map(order => order.id);
    }

    clear() {
        this.cartService.clear();
    }
}