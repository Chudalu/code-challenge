import { Restaurant } from "../entities/restaurant.entity";

export class RestaurantDto {
    name: string;
    address: string;
    longitude: number;
    latitude: number;

    constructor(restaurant: Restaurant) {
        this.name = restaurant.name;
        this.address = restaurant.address;
        this.longitude = restaurant.longitude;
        this.latitude = restaurant.latitude;
    }
}
