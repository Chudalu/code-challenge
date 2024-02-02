import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import ApplicationConfig from './app.config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ModelsModule } from './app/models/models.module';
import { RestaurantModule } from './app/modules/restaurant/restaurant.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

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
    ThrottlerModule.forRoot([{
      ttl: 1000,
      limit: 5,
    }]),
    ModelsModule,
    RestaurantModule,
  ],
  controllers: [AppController],
  providers: [
    { provide: APP_GUARD, useClass: ThrottlerGuard },
    AppService
  ],
})
export class AppModule {}
