import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { NewTest } from './entities/test.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NewTest])],
  controllers: [TestController],
  providers: [TestService]
})
export class TestModule {}
