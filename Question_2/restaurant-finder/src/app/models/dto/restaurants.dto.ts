import { RestaurantDto } from "src/app/modules/restaurant/dto/restaurant.dto";

export class RestaurantsDto {
    restaurants?: RestaurantDto[];

    constructor(restaurants: RestaurantDto[]) {
        this.restaurants = restaurants;
    }
}