import { Controller, Get, Query } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(
    private readonly testService: TestService,
  ) {}

  @Get()
  find(): Promise<any> {
    return this.testService.find();
  }
}
