import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  usuario: any;
  constructor(private CS: CookieService) { }

  ngOnInit(): void {
    this.usuario = this.CS.get('usuario');
  }

}
