import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public name: string;
  public exibirTerceiroCampo: boolean;

  constructor(private servicoUsuario: UserService) {
  }

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

    let novoUsuario = new User();
    novoUsuario.name = this.name;

    this.servicoUsuario.enviarUsuario(novoUsuario).subscribe(resp => {
      console.log(resp);
    });
  }
}
