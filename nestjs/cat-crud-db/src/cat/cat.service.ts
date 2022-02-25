import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Cat } from './cat.entity';

@Injectable()
export class CatService {
    constructor(
        @InjectRepository(Cat)
        private catRepository: Repository<Cat>,
    ) { };

    async findAll(): Promise<Cat[]> {
        return await this.catRepository.find();
    }

    async findOne(catID: number): Promise<Cat> {
        const res = await this.catRepository.find();
        const cat = res.find(cat => cat.id == catID);
        console.log(cat, 'hello');
        return cat;
    }

    async create(cat: Cat): Promise<Cat> {
        return await this.catRepository.save(cat);
    }

    async update(cat: Cat): Promise<UpdateResult> {
        return await this.catRepository.update(cat.id, cat);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.catRepository.delete(id);
    }
}
