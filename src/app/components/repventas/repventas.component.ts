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
GetProd(){
this.Reportservice.getTotalProduccion(this.fechainicio,this.fechafin).subscribe(data =>{
  this.total = data;
})
}
}
