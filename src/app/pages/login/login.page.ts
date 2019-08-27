import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public name: string;
  public exibirTerceiroCampo: boolean;

  constructor() { }

  ngOnInit() {
    this.name = 'sapore';
    this.exibirTerceiroCampo = false;
  }

  Validar() {
    this.exibirTerceiroCampo = false;
    if (this.name === 'marco') {
      this.exibirTerceiroCampo = true;
      console.log('taca lhe pau no carrinho');
    }

  }

}
