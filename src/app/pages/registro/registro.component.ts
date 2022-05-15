import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  emailCheck= '^[a-z0-9._*+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$';

passReq(){
    return this.miFormulario.controls['confirmPassword']?.errors?.['required'] &&
           this.miFormulario.controls['confirmPassword']?.touched && 
           this.miFormulario.controls['password']?.touched;
  }

emailReq(){
  return this.miFormulario.controls['email']?.errors?.['required'] &&
         this.miFormulario.controls['email']?.touched;
}

emailPattern(){
  return this.miFormulario.controls['email']?.errors?.['pattern'] &&
         this.miFormulario.controls['email']?.touched;
}

  matchPass(ctrl: FormControl){
    const pass = ctrl.get('password')?.value;
    const confirmPass = ctrl.get('confirmPassword')?.value;
    if(pass != confirmPass){
      ctrl.get('confirmPassword')?.setErrors({cpass: true});
    }
  }

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.required] ],
    email: ['',[Validators.required]],
    usuario: ['',[Validators.required,  Validators.minLength(6)]],
    password: ['',[Validators.required, Validators.minLength(8)]],
    confirmPassword: ['',[Validators.required]]},{
    validators: this.matchPass
  });

  constructor(private fb: FormBuilder, private CS: CookieService, private router: Router) { }

  ngOnInit(): void {

    this.miFormulario.setValue({
      nombre: '',
      email: '',
      usuario: '',
      password: '',
      confirmPassword: ''
    });
  }

  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors 
          && this.miFormulario.controls[campo].touched;

  }

  save(){
    console.log(this.miFormulario.value);
    this.CS.set('access_token', 'token-prueba', 1, '/');
    this.router.navigate(['/main']);
  }

}