import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { EstoqueService } from './estoque.service';

@Controller('estoque')
export class EstoqueController {
    constructor(private readonly estoque: EstoqueService) { }

    @Get() 
    async findAll() {
        return await this.estoque.findAll();
    } 
    
    @Get(":id")
    async findById(@Param() id: number) {
        return this.estoque.findById(id)
    }

    @Post()
    async create(@Body() estoque) {
        return await this.estoque.create(estoque)
    }

    @Delete(":id")
    async delete(@Param() id: number) {
        return this.delete(id);
    }
}
