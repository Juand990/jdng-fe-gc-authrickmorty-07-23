import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url:string='http://localhost:3000/characters';

@Injectable({
  providedIn: 'root',
})

export class PersonajesService {
  //id del personaje del que se obtiene todo el detalle completo
  id: number = 0;

  constructor(private http: HttpClient) {}
  
  //GET para cargar todos los characters en characters.component
  obtener() {
    return this.http.get(url);
  }
  //detalle completo para detalle.component
  detalleId(id: any) {
    this.id = id;
    let get = url+'/' + id;
    return this.http.get(get);
  }
  //Añadir nuevo Character al data.json
  nuevo(data:any):Observable<any>{
    return this.http.post(url,data);
  }
  //Edita el Character del data.json
  edit(id: any,data:any):Observable<any>{
    return this.http.put(url+'/' + id,data);
  }
  //Borra el Character del data.json
  delete(id: any):Observable<any>{
    return this.http.delete(url+'/' + id);
  }


}
