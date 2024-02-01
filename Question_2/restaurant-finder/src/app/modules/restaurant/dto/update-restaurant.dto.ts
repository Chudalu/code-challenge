import { IsString, IsNumber } from 'class-validator';
import { CuisineEnum } from 'src/app/models/enum/cuisine.enum';
import { PriceRangeEnum } from 'src/app/models/enum/price-range.enum';
import { RatingEnum } from 'src/app/models/enum/rating.enum';

export class UpdateRestaurantDto {
    @IsString()
    name?: string;

    @IsString()
    address?: string;

    @IsNumber()
    longitude?: number;

    @IsNumber()
    latitude?: number;

    @IsString()
    priceRange?: PriceRangeEnum;

    @IsString()
    cuisineType?: CuisineEnum;
    
    @IsString()
    ratings?: RatingEnum;
}
