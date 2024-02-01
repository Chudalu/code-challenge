import { Module } from '@nestjs/common';
import { ModelsService } from './models.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Restaurant } from '../modules/restaurant/entities/restaurant.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Restaurant
    ])
  ],
  providers: [ModelsService],
  exports: [SequelizeModule]
})
export class ModelsModule {}
