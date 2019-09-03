import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  pesquisarCEP(cep: string) {
    return this.http.get("http://viacep.com.br/ws/" + cep + "/json/");
  }

  listarUsuarios() {
    return this.http.get<Array<User>>(environment.api.baseurl + "/users");
  }

  enviarUsuario(user: User) {
    console.log('entro service');
    return this.http.post(environment.api.baseurl + '/users', user);
  }
}
