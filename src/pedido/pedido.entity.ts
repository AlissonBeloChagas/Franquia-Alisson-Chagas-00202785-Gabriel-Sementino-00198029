import { Entity, PrimaryGeneratedColumn, Column, JoinTable, OneToMany, ManyToOne } from "typeorm";
import { pedidoItem } from "src/pedido-item/pedido-item.entity";
import { franquia } from "src/franquia/franquia.entity";
import { movimentaEstoque } from "src/movimenta-estoque/movimenta-estoque.entity";

@Entity('pedido')
export class pedido{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'DataPedido', type: 'date'})
    dataPedido: Date;

    @Column({name: 'DataPrevisaoEntrega', type: 'date'})
    dataPrevisaoEntrega: Date;

    @Column({name: 'Status', type: 'boolean'})
    Status: string;

    @Column({name: 'TotalDesconto', type: 'decimal'})
    TotalDesconto: number;

    @Column({name: 'TotalProduto', type: 'number'})
    TotalProduto: number;

    @Column({name: 'ValorTotal', type: 'decimal'})
    ValorTotal: number;

    @ManyToOne(type => franquia, franquia => franquia.pedido)
    @JoinTable({name: 'FranquiaId'})
    franquia: franquia;

    @OneToMany(type => pedidoItem, pedidoItem => pedidoItem.pedido, {cascade: true, eager: true})
    pedidoItem: Array<pedidoItem>;

    @OneToMany(type => movimentaEstoque, movimentaEstoque => movimentaEstoque.pedido, {cascade: true, eager: true})
    movimentaEstoque: Array<movimentaEstoque>;
}