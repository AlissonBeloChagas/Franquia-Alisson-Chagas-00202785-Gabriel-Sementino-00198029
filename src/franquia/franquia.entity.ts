import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { pedido } from "src/pedido/pedido.entity";

@Entity('franquia')
export class franquia{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'Nome', type: 'varchar', length: 100})
    name: string;

    @Column({name: 'CNPJ', type: 'varchar', length: 21})
    cnpj: string;

    @Column({name: 'IE', type: 'varchar', length: 10})
    ie: string;

    @Column({name: 'Endereco', type: 'varchar', length: 100})
    endereco: string;

    @Column({name: 'Bairro', type: 'varchar', length: 100})
    bairro: string;

    @Column({name: 'Cidade', type: 'varchar', length: 100})
    cidade: string;

    @Column({name: 'CEP', type: 'varchar', length: 10})
    cep: string;

    @OneToMany(type => pedido, pedido => pedido.franquia, {cascade: true, eager: true})
    pedido: Array<pedido>;
}