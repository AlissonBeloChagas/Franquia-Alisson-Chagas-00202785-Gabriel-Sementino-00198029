import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable } from "typeorm";
import { estoque } from "src/estoque/estoque.entity";
import { produto } from "src/produto/produto.entity";
import { pedido } from "src/pedido/pedido.entity";

@Entity('movimentaEstoque')
export class movimentaEstoque{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'Descricao', type: 'varchar', length: 100})
    descricao: string;

    @Column({name: 'TipoMovimentacao', type: 'varchar', length: 1})
    tipoMovimentacao: string;

    @Column({name: 'Quantidade', type: 'number'})
    quantidade: number;

    @ManyToOne(type => estoque, estoque => estoque.movimentaEstoque)
    @JoinTable({name: 'EstoqueId'})
    estoque: estoque;

    @ManyToOne(type => produto, produto => produto.movimentaEstoque)
    @JoinTable({name: 'ProdutoId'})
    produto: produto;

    @ManyToOne(type => pedido, pedido => pedido.movimentaEstoque)
    @JoinTable({name: 'PedidoId'})
    pedido: pedido;
}