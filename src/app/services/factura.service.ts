import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { Observable } from 'rxjs';
import { fact } from '../core/fact';

@Injectable({
  providedIn: 'root'
})
export class facturaservice{
    // endpoint =  'http://localhost:7010/api/Factura/1089'
private facturaurl ='http://localhost:7010/api/Factura?'
// endpoint =  'http://localhost:7010/api/Factura/1089'
http = inject(HttpClient)
private facturaurl2 = 'http://localhost:7010/api/Factura';
getfact2(id: number): Observable<fact[]> {
  return this.http.get<fact[]>(`${this.facturaurl2}/${id}`);
}

getfact(id:number): Observable<any>{
    return this.http.get<any>(`${this.facturaurl}id=${id}`);
}
}