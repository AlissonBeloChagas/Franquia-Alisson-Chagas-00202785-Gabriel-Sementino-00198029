import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { pedidoItem } from './pedido-item.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PedidoItemService {
    constructor(
        @InjectRepository(pedidoItem)
        private pedidoItemRepository: Repository<pedidoItem>,
    ) { }

    async create(pedidoItem: pedidoItem) {
        return this.pedidoItemRepository.save(pedidoItem);
    }

    async delete(id: number) {
        return this.pedidoItemRepository.delete(id);
    }

    async findById(id: number) {
        return this.pedidoItemRepository.findOne(id);
    }

    async findAll() {
        return this.pedidoItemRepository.find();
    }
}
