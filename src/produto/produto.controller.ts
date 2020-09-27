import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { ProdutoService } from './produto.service';

@Controller('produto')
export class ProdutoController {
    constructor(private readonly produto: ProdutoService) { }

    @Get() 
    async findAll() {
        return await this.produto.findAll();
    } 
    
    @Get(":id")
    async findById(@Param() id: number) {
        return this.produto.findById(id)
    }

    @Post()
    async create(@Body() produto) {
        return await this.produto.create(produto)
    }

    @Delete(":id")
    async delete(@Param() id: number) {
        return this.delete(id);
    }
}
