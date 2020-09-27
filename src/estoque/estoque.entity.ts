import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { movimentaEstoque } from "src/movimenta-estoque/movimenta-estoque.entity";

@Entity('estoque')
export class estoque{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'Descricao', type: 'varchar', length: 100})
    descricao: string;

    @OneToMany(type => movimentaEstoque, movimentaEstoque => movimentaEstoque.estoque, {cascade: true, eager: true})
    movimentaEstoque: Array<movimentaEstoque>;
}