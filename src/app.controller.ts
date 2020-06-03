import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  hello(): string {
    return 'Change';
  }

  @Get('hello')
  getHello(): any {
    // return this.appService.getHello();
    console.log(this.appService.getSuplies());
    return (this.appService.getSuplies() as any);
  }

}
