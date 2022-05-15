import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  usuario: any;
  contraseña: any;
  correo: any;
  id: any;
  constructor(private CS: CookieService) { }

  ngOnInit(): void {
    this.usuario = this.CS.get('usuario');
    this.correo = this.CS.get('correo');

  }

}
