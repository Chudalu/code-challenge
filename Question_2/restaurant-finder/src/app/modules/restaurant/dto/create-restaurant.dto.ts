import { IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { CuisineEnum } from "src/app/models/enum/cuisine.enum";
import { PriceRangeEnum } from "src/app/models/enum/price-range.enum";
import { RatingEnum } from "src/app/models/enum/rating.enum";

export class CreateRestaurantDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsNumber()
    @IsNotEmpty()
    longitude: number;

    @IsNumber()
    @IsNotEmpty()
    latitude: number;

    priceRange?: PriceRangeEnum;
    cuisineType?: CuisineEnum;
    ratings?: RatingEnum;
}
