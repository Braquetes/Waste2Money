import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';
// import { NgForm } from '@angular/forms';

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
  perfil = {
    usuario: '',
    correo: ''
  }
  constructor(private CS: CookieService, private AS: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.usuario = this.CS.get('usuario');
    this.correo = this.CS.get('correo');
    this.perfil.usuario = this.usuario;
    this.perfil.correo = this.correo;
    this.id = this.CS.get('idUser');
  }

  update(form: any){
    console.log(form.value);
    // this.AS.update(this.id,form).subscribe((data: any) => {
    //   console.log(data);
    // });
  }

  salir(){
    this.CS.deleteAll();
    this.router.navigate(['/login']);
  }

}
