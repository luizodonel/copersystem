import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvestimentosServerService } from '../server/investimentos-server.service';

@Component({
  selector: 'app-resgate',
  templateUrl: './resgate.component.html',
  styleUrls: ['./resgate.component.css']
})


export class ResgateComponent implements OnInit {

  valorAtualResgate: any;
  resgate: any;
  valorResgate: any;
  msg: string;
  msgAlerta: boolean;
  resgateValidado: boolean;

  constructor(private server: InvestimentosServerService, private rota: Router) { }

  ngOnInit(): void {
    this.getResgate();
  }

  getResgate() {
    this.resgate = this.server.getResgate();
  }

  calcularValor(saldoTotalDisponivel, percentual, valorResgate) {

    if (valorResgate.target.value == '')
      valorResgate.target.value = 0;

    this.valorResgate = (parseFloat(valorResgate.target.value.replace('.', '').replace(',', '').replace('R$', '')) + this.valorResgate) - this.valorAtualResgate.replace('.', '').replace(',', '').replace('R$', '');

    this.validarResgate(this.valorResgate, percentual, saldoTotalDisponivel);

  }

  valorAtual(event) {
    this.valorAtualResgate = event.target.value;
  }

  validarResgate(valorResgate, percentual, saldoTotal) {
    this.resgateValidado = false;

    if (valorResgate > percentual)
      this.mensagens(true, 'Valor a resgatar maior que o percentual permitido');

    else if (saldoTotal < this.valorResgate)
      this.mensagens(true, 'Valor a resgatar maior que o saldo disponível');

    else if (saldoTotal > this.valorResgate)
      this.resgateValidado = true;

  }

  confirmarResgate() {
    if (this.valorResgate == 0) {
      this.mensagens(true, 'Valor a resgatar tem que ser maior que zero');
      this.resgateValidado = false;
    }

  }

  mensagens(msgAlerta, msg) {
    this.msgAlerta = msgAlerta;
    this.msg = msg;
    this.resgateValidado = false;

    setTimeout(() => {
      this.msgAlerta = false;
      this.msg = null;
    }, 3000);

  }

  inicio() {
    this.valorResgate = 0;
    this.resgate = null;

    this.rota.navigateByUrl('/');
  }

}
