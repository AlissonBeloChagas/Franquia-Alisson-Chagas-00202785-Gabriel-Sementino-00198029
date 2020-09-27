import { Injectable } from '@nestjs/common';
import { PedidoService } from './pedido/pedido.service';
import { pedido } from './pedido/pedido.entity';
import { Double } from 'typeorm';
import { Cron, CronExpression } from '@nestjs/schedule';
const nodemailer = require('nodemailer');

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  constructor(
    private readonly pedidoService : PedidoService,
    private readonly pedido: pedido
  ){}

  
  @Cron(CronExpression.EVERY_30_SECONDS)
  async sendMail() {
    this.relatorioDoDia();
  }

  async relatorioDoDia(){
    //Criar variavel valor
    var valor = 0;

    //Pega data atual
    var data = new Date();

    //Pega todos os pedidos do banco
    this.pedidoService.findAll().then(value =>{

      //Percore os pedidos do banco e filtra pela data atual
      for(var i = 0; i < value.length; i++){
        if(value[i].dataPedido = data){
          //Soma o valor movimentado
          valor += value[i].ValorTotal;
        }
      }

      //Envia o email com o valor
      this.enviarEmail(valor);
    })    
  }
  async enviarEmail(Valor:Double){
    let transporter = nodemailer.createTransport({
      host:  "localhost",
      port: "1025",
      auth: null,
    });

    transporter.sendMail({
      from: 'alisson.chagas@edu.unipar.br',
      to: 'alisson.chagas@edu.unipar.br',
      subject: "Relatório Faturamento", 
      html: "O faturamento de hoje foi : RS:"+ Valor
    })
  }
}
