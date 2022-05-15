import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  usuario: any;
  constructor(private CS: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.usuario = this.CS.get('usuario');
  }

  salir(){
    this.CS.deleteAll();
    this.router.navigate(['/login']);
  }

}
