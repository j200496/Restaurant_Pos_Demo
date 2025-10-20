import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable,inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NegocioService {

private negociourl = 'http://localhost:7010/api/Negocio';
http = inject(HttpClient);

GetData(): Observable<any>{
return this.http.get<any>(`${this.negociourl}`);
}
PutProd(id:number,neg: any): Observable<any>{
return this.http.put<any>(`${this.negociourl}/edt/${id}`, neg);
}
}