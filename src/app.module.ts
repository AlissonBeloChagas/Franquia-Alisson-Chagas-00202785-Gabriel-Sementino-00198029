import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FranquiaService } from './franquia/franquia.service';
import { EstoqueService } from './estoque/estoque.service';
import { MovimentaEstoqueService } from './movimenta-estoque/movimenta-estoque.service';
import { PedidoService } from './pedido/pedido.service';
import { PedidoItemService } from './pedido-item/pedido-item.service';
import { ProdutoService } from './produto/produto.service';
import { FranquiaController } from './franquia/franquia.controller';
import { EstoqueController } from './estoque/estoque.controller';
import { MovimentaEstoqueController } from './movimenta-estoque/movimenta-estoque.controller';
import { PedidoController } from './pedido/pedido.controller';
import { PedidoItemController } from './pedido-item/pedido-item.controller';
import { ProdutoController } from './produto/produto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { franquia } from './franquia/franquia.entity';
import { estoque } from './estoque/estoque.entity';
import { movimentaEstoque } from './movimenta-estoque/movimenta-estoque.entity';
import { pedido } from './pedido/pedido.entity';
import { pedidoItem } from './pedido-item/pedido-item.entity';
import { produto } from './produto/produto.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'enviaEmail',
      entities: [
        franquia, estoque, movimentaEstoque, pedido, pedidoItem, produto
      ],
      synchronize: true,
      logging: true,
    }),
    
    TypeOrmModule.forFeature([ franquia, estoque, movimentaEstoque, pedido, pedidoItem, produto])
  ],
  controllers: [AppController, FranquiaController, EstoqueController, MovimentaEstoqueController, PedidoController, PedidoItemController, ProdutoController],
  providers: [AppService, FranquiaService, EstoqueService, MovimentaEstoqueService, PedidoService, PedidoItemService, ProdutoService],
})
export class AppModule {}
