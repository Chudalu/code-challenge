import { Injectable } from '@nestjs/common';
import { ApiResponseDto } from './app/models/dto/api-response.dto';

@Injectable()
export class AppService {
  healthCheck(): ApiResponseDto {
    return new ApiResponseDto('Server healthy');
  }
}
