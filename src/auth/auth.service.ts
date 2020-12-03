import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthDto } from './dto/auth.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  private logger = new Logger('AuthService');

  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(authDto: AuthDto): Promise<void> {
    return this.userRepository.signUp(authDto);
  }

  async signIn(authDto: AuthDto): Promise<{ accessToken: string }> {
    const username = await this.userRepository.validateUser(authDto);

    if (!username) {
      throw new UnauthorizedException('unauthorized access');
    }

    const accessToken = this.jwtService.sign({ username });
    this.logger.debug(`Generated Jwt Token: ${JSON.stringify({ username })}`);

    return { accessToken };
  }
}
