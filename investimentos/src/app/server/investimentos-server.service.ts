import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvestimentosServerService {

  readonly url = 'http://www.mocky.io/v2/5e76797e2f0000f057986099';
  private resgate: any;
  private anime: any;

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
  }


  listarInvestimentos() {
    return this.http.get(`${this.url}`);
  }

  setResgate(resgate: any) {
    this.resgate = resgate;
  }

  getResgate() {
    return this.resgate;
  }

  setAnime(anime: any) {
    this.anime = anime;
  }
  getAnime() {
    return this.anime;
  }

}
