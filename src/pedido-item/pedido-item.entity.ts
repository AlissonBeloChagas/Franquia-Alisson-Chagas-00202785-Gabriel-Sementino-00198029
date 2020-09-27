import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToOne } from "typeorm";
import { pedido } from "src/pedido/pedido.entity";
import { produto } from "src/produto/produto.entity";

@Entity('pedidoItem')
export class pedidoItem{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'Quantidade', type: 'number'})
    quantidade: number;

    @Column({name: 'ValorUnitario', type: 'decimal'})
    valorUnitario: number;

    @ManyToOne(type => pedido, pedido => pedido.pedidoItem)
    @JoinTable({name: 'PedidoId'})
    pedido: pedido;

    @ManyToOne(type => produto, produto => produto.pedidoItem)
    @JoinTable({name: 'ProdutoId'})
    produto: produto;
}