import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvestimentosServerService } from '../server/investimentos-server.service';

@Component({
  selector: 'app-investimentos',
  templateUrl: './investimentos.component.html',
  styleUrls: ['./investimentos.component.css']
})
export class InvestimentosComponent implements OnInit {

  listaInvestimentos: any;
  lista: any;

  constructor(private server: InvestimentosServerService, private rota: Router) { }

  ngOnInit() {
    this.listadeInvestimentos();
  }

  listadeInvestimentos() {
    this.server.listarInvestimentos()
      .subscribe(data => {
        this.lista = data;
        this.listaInvestimentos = this.lista.response.data;
       
        this.calcularPercentual(this.listaInvestimentos);

      });

  }

  resgate(resgate) {
    
    if (resgate.indicadorCarencia === 'N') {
      this.server.setResgate(resgate);
      this.rota.navigateByUrl('/resgate');
    }
  }

  calcularPercentual(lista) {
    
    var total;

    for (var i = 0; i < lista.listaInvestimentos.length; i++) {

      const element = lista.listaInvestimentos[i];
      
      for (var j = 0; j < element.acoes.length; j++) {

        const elemento = element.acoes[j];

        total = element.saldoTotalDisponivel - (element.saldoTotalDisponivel * (elemento.percentual /100));
        total = element.saldoTotalDisponivel - total;

        this.listaInvestimentos.listaInvestimentos[i].acoes[j].percentual = total.toFixed(2);

      }
    
    }

  }

}
