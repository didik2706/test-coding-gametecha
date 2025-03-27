import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PromoCansDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("promo/cans")
  getPromo(@Body() body: PromoCansDto): object {
    const result = this.appService.calculateCans(body)
    
    return {
      totalCansReceived: result
    }
  }
}
