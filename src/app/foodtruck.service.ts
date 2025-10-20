import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from './environments.develoments';

import { env } from 'process';
import { usuarioscreacion } from './usuariosmodels';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class FoodtruckService {

    private http = inject(HttpClient);
    private urlBase = environment.ApiUrl + "/api/Usuarios"; 
    route = inject(Router)
   warning(title:string, text:string, btncolor:string){
return Swal.fire({
  title: title,
  text: text,
  icon: 'warning',
  confirmButtonText:'aceptar',
  confirmButtonColor: btncolor,
});
 }
  success(title:string, text:string, btncolor:string){
return Swal.fire({
  title: title,
  text: text,
  icon: 'success',
  confirmButtonText:'aceptar',
  confirmButtonColor: btncolor,
});
 }
   error(title:string, text:string, btncolor:string){
return Swal.fire({
  title: title,
  text: text,
  icon: 'error',
  confirmButtonText:'aceptar',
  confirmButtonColor: btncolor,
});
 }
 confirmruta(title:string,text:string,ruta:string){
return Swal.fire({
  title:title,
  text:text,
  icon: "question",
  showCancelButton: true,
  showConfirmButton: true,
  cancelButtonColor: "red",
}).then(res=> {
  if(res.isConfirmed){
    this.route.navigateByUrl(ruta);
  }
})
 }
 confirmdelete(title:string,text:string,btncolor:string){
return Swal.fire({
  title:title,
  text:text,
  icon:"question",
  showCancelButton: true,
  showConfirmButton: true,
  cancelButtonColor: btncolor,
}).then((result) =>{
  if(result.isConfirmed){
this.warning("Exito!","Datos borrados existosamente!","green");
  }
})
 }
 SetBorrado(id: number): Observable<any>{
  return this.http.put(`${this.urlBase}/borrado/${id}`,{})
 }

 Putuser(id:number, user:any){
  return this.http.put(`${this.urlBase}/${id}`, user);
 }   
 Getuser(id: number): Observable <any>{
   return this.http.get<any>(`${this.urlBase}/${id}`);
  }
  public obtenerUsuarios() {
    return this.http.get<any>(this.urlBase);
  }

public guardarusuarios(usuario: any){
 return this.http.post(this.urlBase, usuario);
}

}
