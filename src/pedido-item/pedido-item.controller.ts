import { Controller, Delete, Param, Body, Post, Get } from '@nestjs/common';
import { PedidoItemService } from './pedido-item.service';

    @Controller('pedido-item')
    export class PedidoItemController {
        constructor(private readonly pedidoItem: PedidoItemService) { }

    @Get() 
    async findAll() {
        return await this.pedidoItem.findAll();
    } 

    @Get(":id")
    async findById(@Param() id: number) {
        return this.pedidoItem.findById(id)
    }

    @Post()
    async create(@Body() pedidoItem) {
        return await this.pedidoItem.create(pedidoItem)
    }

    @Delete(":id")
    async delete(@Param() id: number) {
        return this.delete(id);
    }
}
    
