import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TestUser } from './entities/testUser.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(TestUser) private readonly userRepository: Repository<TestUser>
  ){}

  async addUser(user: { id: string; pw: string; email: string}) {
  
    // const newUser = await this.userRepository.create();
    // newUser.id = user.id;
    // newUser.pw = user.pw;
    // newUser.email = user.email;
    // newUser.index = 1;
    // console.log('[Auth Service : add User] ... ', newUser);

    // return this.userRepository.save(newUser)
    return true;
  }
}
