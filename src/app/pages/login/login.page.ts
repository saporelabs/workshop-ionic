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
  public exibirErroCampo: boolean;
  public cadastroSucesso: boolean;
  public endereco: any;

  constructor(private servicoUsuario: UserService) {
  }

  ngOnInit() {
    this.name = 'sapore';
    this.exibirErroCampo = false;
    this.cadastroSucesso = false;
  }

  Validar() {
    this.exibirErroCampo = false;
    this.cadastroSucesso = false;

    let novoUsuario = new User();
    novoUsuario.name = this.name;

    this.servicoUsuario.pesquisarCEP(novoUsuario.name).subscribe(resp =>{
      console.log(resp);
      this.endereco = resp;
    });

    /*this.servicoUsuario.enviarUsuario(novoUsuario).subscribe(resp => {
      console.log(resp);
    }, resp => {
      if (resp.status === 401) {
        this.exibirErroCampo = true;
        
      }
      if (resp.status === 201) {
        this.cadastroSucesso = true;
      }
    });*/
  }
}
