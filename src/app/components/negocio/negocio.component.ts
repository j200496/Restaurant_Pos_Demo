import { Component,inject, OnInit } from '@angular/core';
import { NegocioService } from '../../services/negocio.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from '../shared/form/form.component';
import { FoodtruckService } from '../../foodtruck.service';

@Component({
  selector: 'app-negocio',
  imports: [ReactiveFormsModule],
  templateUrl: './negocio.component.html',
  styleUrl: './negocio.component.css'
})
export class NegocioComponent implements OnInit {
nservice = inject(NegocioService);
alertserv = inject(FoodtruckService);
frm = inject(FormBuilder);
id!: number;
form = this.frm.group({
    idNegocio:(0),
    nombre:[''],
    telefono: [''],
    direccion: [''],
    correo: [''],
    rnc:[''],
  });

  ngOnInit(): void {
  this.nservice.GetData().subscribe(neg => {
    const negocio = Array.isArray(neg) ? neg[0] : neg;
    if(negocio){
      this.form.patchValue({
      idNegocio: negocio.idNegocio,
      nombre: negocio.nombre,
      telefono: negocio.telefono,
      direccion: negocio.direccion,
      correo: negocio.correo,
      rnc: negocio.rnc
    });
    }
  });
  }
  Put(id:number){
    const data = this.form.value;
    if(this.form.valid){
        this.nservice.PutProd(id,data).subscribe(() =>{
    this.alertserv.success('Datos actualizados','Datos actualizados','blue');
  })
    }
  }
}
