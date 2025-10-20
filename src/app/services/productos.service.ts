import { HttpClient } from '@angular/common/http';
import { inject,Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Products } from '../core/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductosService{

private urlproduct = "http://localhost:7010/api/Productos/itbis";
private urlprod = "http://localhost:7010/api/Productos";
private urladdpro =  'http://localhost:7010/api/Productos/addp';

http = inject(HttpClient);

GetProduct(){
return this.http.get<any>(this.urlproduct);
}
AddProducto(prduct: Products): Observable<Products>{
  return this.http.post<Products>(this.urladdpro,prduct);
}
BorrarProd(id: number):Observable<any>{
  return this.http.put<any>(`${this.urlprod}/borrar/${id}`,{});
}
Get1Product(id:number): Observable<any> {
return this.http.get<any>(`${this.urlprod}/${id}`);
}
PutProd(id:number,prod: Products): Observable<any>{
return this.http.put<any>(`${this.urlprod}/edit/${id}`, prod);
}
}
