import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  // 1. Inject UsersService
  constructor(private usersService: UsersService) {}

  // 2. Validate User Logic
  async login(loginDto: LoginDto) {
    // Step 1: Find user by email
    const user = await this.usersService.findByEmail(loginDto.email);

    // Step 2: Check if user exists AND password matches
    // (Note: Abhi hum plain text password check kar rahe hain. Production me bcrypt use karna chahiye)
    if (user && user.password === loginDto.password) {
      // Step 3: Return success message (Baad me yahan Token return karenge)
      return { msg: 'Login Successful', user: user };
    }

    // Step 4: Login Failed
    throw new UnauthorizedException('Invalid Credentials');
  }
}
