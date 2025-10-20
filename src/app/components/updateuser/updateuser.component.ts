import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { UsuariosformComponent } from '../shared/usuariosform/usuariosform.component';
import { FoodtruckService } from '../../foodtruck.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  imports: [UsuariosformComponent],
  templateUrl: './updateuser.component.html',
  styleUrl: './updateuser.component.css'
})
export class UpdateuserComponent implements OnInit {
@Input({transform: numberAttribute}) id!: number;
modelo?: any;
servicio = inject(FoodtruckService)
route = inject(Router)

ngOnInit(): void {
  this.servicio.Getuser(this.id).subscribe(u =>{
    this.modelo = u;
  })
}

Actualizar(user: any){
  if (!this.id || !user) {
 this.servicio.warning('Error!','No se pudieron actualizar los datos!','red');
    return;
  }
  this.servicio.Putuser(this.id,user).subscribe(()=>{
    this.servicio.warning('Exito!','Datos actualizados exitosamente','green');
this.route.navigateByUrl("/layout/lusuarios");
  })
}
}
