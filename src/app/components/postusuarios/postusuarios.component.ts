import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UsuariosformComponent } from "../shared/usuariosform/usuariosform.component";
import { FoodtruckService } from '../../foodtruck.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postusuarios',
  imports: [CommonModule, FormsModule, UsuariosformComponent],
  templateUrl: './postusuarios.component.html',
  styleUrl: './postusuarios.component.css'
})
export class PostusuariosComponent {
  formbuilder = inject(FormBuilder);
  service = inject(FoodtruckService);
    route = inject(Router);
form = this.formbuilder.group({
  idusuario:[0],
  nombre: [''],
  usuario:[''],
  clave:[''],
  rol:[''],
  estado:['']
})
  usuario = {
    idusuario: 0,
    nombre: '',
    usuario: '',
    rol: '',
    clave: '',
    estado: ''
  };
  GuardarCambios(){
    const data = this.form.value;
    this.service.guardarusuarios(data).subscribe({
    next:(res =>{
    this.service.warning("Exito!","Usuario agregado exitosamente!","green");
    this.route.navigateByUrl("/layout/lusuarios");
    })
    })
  }
}
