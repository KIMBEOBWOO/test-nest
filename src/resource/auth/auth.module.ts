import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TestUser } from './entities/testUser.entity';
import { GoogleStrategy } from './passport/google.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([TestUser])],
  providers: [AuthService , GoogleStrategy,],
  controllers: [AuthController],
})

export class AuthModule {}
