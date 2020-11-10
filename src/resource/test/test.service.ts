import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { NewTest } from './entities/test.entity';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(NewTest) private readonly newTestRepository: Repository<NewTest>
  ){}

  async find(): Promise<any> {
    return await this.newTestRepository.find();
  }
}
