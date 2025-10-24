import { Component,input,Input,inject,Output } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ReporteserviceService } from '../../services/reporteservice.service';


@Component({
  selector: 'app-reportes',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css'
})
export class ReportesComponent {
@Input() titulo!:string;
@Input() dvclass!: string;
@Input() dvtitle!:string;
@Input() mt: number = 1500.00;
@Input() theader: any[]=  []
//@Input() data:any[] =[]

}
