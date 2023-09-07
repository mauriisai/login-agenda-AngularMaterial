import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  // Lista de Usuarios que se mostraran en la tabla
  listaUsuarios: Usuario[] = [
    {usuario: "mariavh", nombre: 'Maria', apellido: "Vasquez", sexo: "Femenino"},
    {usuario: "danielf", nombre: 'Daniel', apellido: "Flores", sexo: "Masculino"},
    {usuario: "ernestoh", nombre: 'Ernesto', apellido: "Hernandez", sexo: "Masculino"},
    {usuario: "stevenm", nombre: 'Steven', apellido: "Mendoza", sexo: "Masculino"},
    {usuario: "victoriaa", nombre: 'Victoria', apellido: "Arias", sexo: "Femenino"},
    {usuario: "jasonm", nombre: 'Jason', apellido: "Mundo", sexo: "Masculino"},
    {usuario: "alejandroh", nombre: 'Alejandro', apellido: "Henriquez", sexo: "Masculino"},
    {usuario: "eileens", nombre: 'Eileen', apellido: "Sosa", sexo: "Femenino"}
  ];

  constructor() { }

  getUsuario(){
    return this.listaUsuarios.slice();
  }

  eliminarUsuario(index:number){
    this.listaUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario:Usuario){
    this.listaUsuarios.unshift(usuario);
  }

}
