import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { ApiResponseDto } from './app/models/dto/api-response.dto';

@ApiTags('application')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): ApiResponseDto {
    return this.appService.healthCheck();
  }
}
