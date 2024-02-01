import { CuisineEnum } from 'src/app/models/enum/cuisine.enum';
import { PriceRangeEnum } from 'src/app/models/enum/price-range.enum';
import { RatingEnum } from 'src/app/models/enum/rating.enum';

export class UpdateRestaurantDto {
    name?: string;
    address?: string;
    longitude?: number;
    latitude?: number;
    priceRange?: PriceRangeEnum;
    cuisineType?: CuisineEnum;
    ratings?: RatingEnum;
}
