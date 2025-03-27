import { Injectable } from '@nestjs/common';
import { PromoCansDto } from './app.dto';

@Injectable()
export class AppService {
  calculateCans(promoCansDto: PromoCansDto): number {
    return promoCansDto.initialCans + Math.floor(promoCansDto.initialCans / 3);
  }
}
