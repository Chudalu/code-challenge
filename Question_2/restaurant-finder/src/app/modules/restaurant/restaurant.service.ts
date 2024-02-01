import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import haversineDistance from 'haversine-distance';
import { InjectModel } from '@nestjs/sequelize';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantDto } from './dto/restaurant.dto';
import { GenericStatus } from 'src/app/models/enum/generic-status.enum';
import { ApiResponseDto } from 'src/app/models/dto/api-response.dto';
import { RestaurantQuery } from './dto/restaurant-query.dto';
import { RestaurantsDto } from 'src/app/models/dto/restaurants.dto';

@Injectable()
export class RestaurantService {

  constructor(
    @InjectModel(Restaurant) private RestaurantModel: typeof Restaurant
  ) {}
  
  //create/save new restaurant
  async create(createRestaurantDto: CreateRestaurantDto): Promise<RestaurantDto> {
    let restaurant = new this.RestaurantModel({...createRestaurantDto});
    await restaurant.save();
    return new RestaurantDto(restaurant);
  }

  async findAll(restaurantQuery: RestaurantQuery): Promise<RestaurantsDto> {
    //Get details to use to calculate distance
    let longitude = restaurantQuery.longitude;
    let latitude = restaurantQuery.latitude;
    let distance = restaurantQuery.distance;
    // Search for restuarant in city and using other search parameters
    let searchQuery = this.removeEmpty({...restaurantQuery, longitude: null, latitude: null, distance: null });
    let restaurantsInCity = await this.RestaurantModel.findAll({ where: { ...searchQuery, status: GenericStatus.ACTIVE } });
    //return not found error if no restaurant is returned
    if (!(restaurantsInCity.length > 0)) throw new NotFoundException('No restaurant was found from your search request');
    //if any value to calculate distance is missing, return all restaurant in city (or using other search params )
    if (!latitude || !latitude || !distance) return new RestaurantsDto(restaurantsInCity.map(r => new RestaurantDto(r)));
    //Get all restaurants within the allowed distance from customer
    let restaurantsCloseToMe = restaurantsInCity.filter((restaurant) => 
    this.calculateDistanceInMeters(latitude, longitude, restaurant.latitude, restaurant.longitude) <= distance);
    //if there are none, return not found error
    if (!(restaurantsCloseToMe.length > 0)) throw new NotFoundException('No restaurant was found from your search request');
    //return restaurants within the distance specified
    return new RestaurantsDto(restaurantsCloseToMe.map(r => new RestaurantDto(r)));
  }

  //find one restaurant by ID - uuid
  async findOne(id: string): Promise<RestaurantDto> {
    let restaurant = await this.RestaurantModel.findOne({ where: { id, status: GenericStatus.ACTIVE } });
    if (!restaurant) throw new NotFoundException('Restaurant not found');
    return new RestaurantDto(restaurant);
  }

  //update a restaurant
  async update(id: string, updateRestaurantDto: UpdateRestaurantDto): Promise<RestaurantDto> {
    let restaurant = await this.RestaurantModel.findOne({ where: { id, status: GenericStatus.ACTIVE } });
    if (!restaurant) throw new NotFoundException('Restaurant to update not found');
    await restaurant.update({...updateRestaurantDto});
    return new RestaurantDto(restaurant);
  }

  //delete a restaurant
  async remove(id: string): Promise<ApiResponseDto> {
    let restaurant = await this.RestaurantModel.findOne({ where: { id, status: GenericStatus.ACTIVE } });
    if (!restaurant) throw new NotFoundException('Restaurant to delete not found');
    restaurant.status = GenericStatus.DELETED;
    await restaurant.save()
    return new ApiResponseDto('restaurant deleted');
  }

  //Calculates Distance between two cordinates in a straight line
  //Can be replaced with google's computeDistanceBetween
  //which takes into account road, price earth radius and other values etc.
  private calculateDistanceInMeters(lat1: number, long1: number, lat2: number, long2: number): number {
    let firstCordinate = { lat: lat1, lng: long1 };
    let secondCordinate = { lat: lat2, lng: long2 };
    let distanceInMeters = haversineDistance(firstCordinate, secondCordinate);
    return distanceInMeters;
  }

  //remove null or undefined pair in object
  private removeEmpty(obj: RestaurantQuery) {
    return Object.entries(obj)
      .filter(([_, v]) => v != null && v != '' && v != undefined)
      .reduce(
        (acc, [k, v]) => ({ ...acc, [k]: v === Object(v) ? this.removeEmpty(v) : v }),
        {}
      );
  }
}
