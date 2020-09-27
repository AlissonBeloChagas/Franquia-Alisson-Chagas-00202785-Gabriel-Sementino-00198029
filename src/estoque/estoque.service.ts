import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { estoque } from './estoque.entity';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class EstoqueService {
    constructor(
        @InjectRepository(estoque)
        private estoqueRepository: Repository<estoque>,
    ) { }

    async create(estoque: estoque) {
        return this.estoqueRepository.save(estoque);
    }

    async delete(id: number) {
        return this.estoqueRepository.delete(id);
    }

    async findById(id: number) {
        return this.estoqueRepository.findOne(id);
    }

    async findAll() {
        return this.estoqueRepository.find();
    }
}
