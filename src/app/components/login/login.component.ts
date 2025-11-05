import { Component,inject } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FoodtruckService } from '../../foodtruck.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
route = inject(Router)
alert = inject(FoodtruckService)
user!:string;
clave!:string;  
Login(){
if(this.user == 'Prueba' && this.clave == 'Prueba'){
this.route.navigateByUrl('/layout/caja');
}else{
this.alert.warning('Error','Credenciales incorrectas','red');
}
}  
}
