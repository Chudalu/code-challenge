import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseUUIDPipe } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { RestaurantQuery } from './dto/restaurant-query.dto';
import { RestaurantDto } from './dto/restaurant.dto';
import { ApiResponseDto } from 'src/app/models/dto/api-response.dto';
import { RestaurantsDto } from 'src/app/models/dto/restaurants.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('restaurant')
@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Post()
  async create(@Body() createRestaurantDto: CreateRestaurantDto): Promise<RestaurantDto> {
    return await this.restaurantService.create(createRestaurantDto);
  }

  @Get()
  async findAll(@Query() restaurantQuery: RestaurantQuery): Promise<RestaurantsDto> {
    return await this.restaurantService.findAll(restaurantQuery);
  }

  @Get(':uuid')
  async findOne(@Param('uuid', new ParseUUIDPipe()) uuid: string): Promise<RestaurantDto> {
    return await this.restaurantService.findOne(uuid);
  }

  @Patch(':uuid')
  async update(@Param('uuid', new ParseUUIDPipe()) uuid: string, @Body() updateRestaurantDto: UpdateRestaurantDto): Promise<RestaurantDto> {
    return await this.restaurantService.update(uuid, updateRestaurantDto);
  }

  @Delete(':uuid')
  async remove(@Param('uuid', new ParseUUIDPipe()) uuid: string): Promise<ApiResponseDto> {
    return await this.restaurantService.remove(uuid);
  }
}
