import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  
  sexo: any[] = ["Masculino", "Femenino"];

  form:FormGroup;

  constructor(private fb:FormBuilder, private _usuarioService:UsuarioService, private router:Router, 
        private _snackBar:MatSnackBar){ 
    
    this.form=this.fb.group({
      usuario:['',Validators.required],
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      sexo:['',Validators.required],
    })
  }

  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  ngOnInit(): void {
    
  }

  agregarUsuario(){
    const user:Usuario={
      usuario:this.form.value.usuario,
      nombre:this.form.value.nombre,
      apellido:this.form.value.apellido,
      sexo:this.form.value.sexo
    }
    this._usuarioService.agregarUsuario(user);
    this.router.navigate(['/dashboard/usuarios']);
    
    this._snackBar.open('Usuario registrado con Exito', '', {
      duration:1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });

    // Comprobamos imprimiendo en consola el Obj
    console.log(user); 
    
  }

}
