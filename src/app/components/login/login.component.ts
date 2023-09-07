import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  loading=false;

  constructor(private fb:FormBuilder, private _snackbar:MatSnackBar, private router:Router){
    this.form=this.fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  
  }

  ingresar(){
    const usuario =this.form.value.usuario;
    const password =this.form.value.password;

    if(usuario=='mariavh' && password=='admin00'){
      // Mostramos el obj. Loading
      this.fakeLoading();

    } else {
      // Mostramos un mensaje de error
      this.error();
      this.form.reset();
    }

  }
  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      // Redireccionamos al dashboard
      this.router.navigate(['dashboard']);
    
    }, 1500);
  }

  error(){
    this._snackbar.open('Usuario o Clave son Incorrectos','',{ 
      duration:3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
