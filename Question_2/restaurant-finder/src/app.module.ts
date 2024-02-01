import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import ApplicationConfig from './app.config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ModelsModule } from './app/models/models.module';
import { RestaurantModule } from './app/modules/restaurant/restaurant.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ApplicationConfig]
    }),
    SequelizeModule.forRoot({
      uri: ApplicationConfig().databaseUrl,
      autoLoadModels: true,
      synchronize: true,
      logging: false
    }),
    ModelsModule,
    RestaurantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
