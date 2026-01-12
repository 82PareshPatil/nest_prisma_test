import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.usersService.findByEmail(loginDto.email);

    if (user && user.password === loginDto.password) {
      return {
        access_token: this.jwtService.sign({
          userId: user.id,
        }),
      };
    }

    throw new UnauthorizedException('Invalid Credentials');
  }
}
