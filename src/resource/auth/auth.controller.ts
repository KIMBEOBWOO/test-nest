import { Controller, Get, UseGuards, Req, } from '@nestjs/common';
import { AuthService } from './auth.service'
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {};

  // Google Login
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req){}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthCallback(@Req() req){
      return 'ok';
  }
}
