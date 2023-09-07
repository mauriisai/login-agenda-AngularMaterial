import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {
  
  listaUsuarios:Usuario[]=[];

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  dataSource!:MatTableDataSource<any>;

  // Paginacion, Ordenamiento por columna
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  

  constructor (private _usuarioService:UsuarioService, private _snackbar:MatSnackBar){ }

  ngOnInit(): void {
    this.cargarUsuarios();
  }
  
  cargarUsuarios(){
    this.listaUsuarios = this._usuarioService.getUsuario();
    this.dataSource = new MatTableDataSource(this.listaUsuarios);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  eliminarUsuario(index: number){
    // Comprobacion en consola del id obtenido
    console.log(index);
    this._usuarioService.eliminarUsuario(index);
    this.cargarUsuarios();

    // Mostrar mensaje de registro eliminado
    this._snackbar.open('Registro eliminado con exito','',{ 
        duration:3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    
  }

}