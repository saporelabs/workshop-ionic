import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-listarusuario',
  templateUrl: './listarusuario.page.html',
  styleUrls: ['./listarusuario.page.scss'],
})
export class ListarusuarioPage implements OnInit {

  users: Array<User>;

  constructor(private userService: UserService) { }

  ngOnInit() {


    this.userService.listarUsuarios().subscribe(resp => {
      this.users = resp;
      this.users[0].enderecos = ["Avenida Paulista", "Rua AMazonas", "xpto"];
      this.users[0].image = "https://s2.glbimg.com/D-YOrUQTV3X9L91i79wDI6LSus0=/392x221/top/smart/filters:strip_icc()/s2.glbimg.com/Zaa67frIOPfNfRLDNbKroDV-qeo=/0x192:1080x800/398x224/e.glbimg.com/og/ed/f/original/2019/09/03/quintuplos.jpg";
    });
  }




}
