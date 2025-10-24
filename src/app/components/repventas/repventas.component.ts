import { Component,inject } from '@angular/core';
import { ReportesComponent } from "../../shared/reportes/reportes.component";
import { ReporteserviceService } from '../../services/reporteservice.service';

@Component({
  selector: 'app-repventas',
  imports: [ReportesComponent],
  templateUrl: './repventas.component.html',
  styleUrl: './repventas.component.css'
})
export class RepventasComponent {
Reportservice = inject(ReporteserviceService)
total!: number;
fechainicio!: string;
fechafin!: string;
theader:any[] = ['Nombre','Descripcion','Categoria','Cantidad','Precio']
data:any[] = [
    {nombre:'Hot Dog',descripcion:'Pollo',categoria:'Hot Dog',precio:160,cantidad:0},
   {nombre:'Hamburguer',descripcion:'Res',categoria:'Hamburguer',precio:360,cantidad:0},
  {nombre:'Tacos',descripcion:'Pollo',categoria:'Tacos',precio:260,cantidad:0},
  {nombre:'Tacos',descripcion:'Cerdo',categoria:'Tacos',precio:260,cantidad:0},
  {nombre:'Yaroa',descripcion:'Cerdo',categoria:'Yaroa',precio:260,cantidad:0},
  {nombre:'Sandwich',descripcion:'Pollo',categoria:'Sandwich',precio:260,cantidad:0},
  {nombre:'Tacos',descripcion:'Res',categoria:'Tacos',precio:260,cantidad:0}
]
GetProd(){
this.Reportservice.getTotalProduccion(this.fechainicio,this.fechafin).subscribe(data =>{
  this.total = data;
})
}
}
