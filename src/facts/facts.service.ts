import { Injectable } from '@nestjs/common';
import { CreateFactDto } from './dto/create-fact.dto';
import { UpdateFactDto } from './dto/update-fact.dto';
import { Fact } from './entities/fact.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class FactsService {

  constructor(
    @InjectRepository(Fact)
    private factsRepository: Repository<Fact>,
  ) {}

  async create(createFactDto: CreateFactDto) {
    return await this.factsRepository.save(createFactDto);
  }

  findAll() {
    return this.factsRepository.find();
  }

  findOne(id: number) {
    return this.factsRepository.findOneBy({ id });
  }

  async update(id: number, updateFactDto: UpdateFactDto) {
    return await this.factsRepository.update(id, updateFactDto)
  }

  remove(id: number) {
    return this.factsRepository.delete(id);
  }
}
