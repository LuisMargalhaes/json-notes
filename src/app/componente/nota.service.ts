import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Nota } from '../componentes/nota';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  constructor(private http: HttpClient ) {}
  private readonly API ='hppt://localhost:3000/notas';

  listar(): Observable<Nota[]> {
    return this.http.get<Nota[]>(this.API)
  }
  criar(nota: Nota): Observable<Nota>{
    return this.http.post<Nota>(this.API, nota)
  }


}

