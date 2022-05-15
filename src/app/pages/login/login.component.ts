import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailCheck= '^[a-z0-9._*+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$';

emailReq(){
  return this.miFormulario.controls['correo']?.errors?.['required'] &&
         this.miFormulario.controls['correo']?.touched;
}

emailPattern(){
  return this.miFormulario.controls['correo']?.errors?.['pattern'] &&
         this.miFormulario.controls['correo']?.touched;
}

  miFormulario: FormGroup = this.fb.group({
    correo: ['',[Validators.required]],
    contraseña: ['',[Validators.required, Validators.minLength(8)]]
  });

  constructor(private fb: FormBuilder, private CS: CookieService, private router: Router, private AS: AuthService) { }

  ngOnInit(): void {

    this.miFormulario.setValue({
      correo: '',
      contraseña: '',
    });
  }

  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors 
          && this.miFormulario.controls[campo].touched;

  }

  save(){
    console.log(this.miFormulario.value);
    this.AS.login(this.miFormulario.value).subscribe((data: any) =>{
      console.log(data);
      if(data.status != 'user not found'){
        this.CS.set('access_token', 'token-prueba', 1, '/');
        this.CS.set('idUser', data.ID_USUARIO, 1, '/');
        this.CS.set('usuario', data.USUARIO, 1, '/');
        this.CS.set('correo', data.CORREO, 1, '/');
        this.router.navigate(['/main']);
      }
    });
  }

}
