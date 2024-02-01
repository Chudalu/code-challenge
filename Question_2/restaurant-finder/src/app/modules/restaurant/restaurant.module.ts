import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';
import { ModelsModule } from 'src/app/models/models.module';

@Module({
  controllers: [RestaurantController],
  providers: [RestaurantService],
  imports: [ ModelsModule ]
})
export class RestaurantModule {}
