import { Component } from '@angular/core';
import { facturaservice } from '../../services/factura.service';
import { Injectable,inject } from '@angular/core';
import { FoodtruckService } from '../../foodtruck.service';
import { factura } from '../../core/factura';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { fact } from '../../core/fact';

@Component({
  selector: 'app-facturas',
  imports: [CommonModule,FormsModule,CurrencyPipe],
  templateUrl: './facturas.component.html',
  styleUrl: './facturas.component.css'
})
export class FacturasComponent {

factserv = inject(facturaservice)
alert = inject(FoodtruckService)  
 buscarId: number = 0;
 leerid: number = 0;
factura: factura ={
 subTotal: 0,
    totalItbis: 0,
    montoTotal: 0,
    tipo: '',
    estado: '',
    cliente: '',
    fechaRegistro:'',
    nombre:''
}

factu: fact[] = [];
Leerfact() {
  console.log('Buscando factura con ID:', this.buscarId);
  
  this.factserv.getfact2(this.buscarId).subscribe({
    next: (data) => {
      this.factu = data;
      console.log('Factura obtenida:', this.factu);
    },
    error: (err) => {
      console.error('Error al obtener la factura:', err);
    }
  });
}
Master(){
  this.Leerfact();
  this.BuscarFactura();
}
BuscarFactura(){
  if(this.buscarId <= 0){
    return;
  }
  this.factserv.getfact(this.buscarId).subscribe(data =>{
    this.factura = data
  })
}
}
