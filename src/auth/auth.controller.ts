import {
  Body,
  Controller,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/decorator/get-user';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe)
    authDto: AuthDto,
  ): Promise<void> {
    return this.authService.signUp(authDto);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe)
    authDto: AuthDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authDto);
  }

  @Post('/check')
  @UseGuards(AuthGuard())
  check(
    @GetUser()
    user: User,
  ): void {
    console.log(user);
  }
}
