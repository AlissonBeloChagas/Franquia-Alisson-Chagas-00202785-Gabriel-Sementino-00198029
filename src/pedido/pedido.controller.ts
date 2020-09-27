import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { PedidoService } from './pedido.service';

@Controller('pedido')
export class PedidoController {
    constructor(private readonly pedido: PedidoService) { }

    @Get() 
    async findAll() {
        return await this.pedido.findAll();
    } 
    
    @Get(":id")
    async findById(@Param() id: number) {
        return this.pedido.findById(id)
    }

    @Post()
    async create(@Body() pedido) {
        return await this.pedido.create(pedido)
    }

    @Delete(":id")
    async delete(@Param() id: number) {
        return this.delete(id);
    }
}
