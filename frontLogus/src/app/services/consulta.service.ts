import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consulta } from '../models/consulta.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  private apiUrl = 'http://localhost:8080/consultas';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  // Cadastrar nova consulta
  agendarConsulta(consulta: Consulta): Observable<Consulta> {
    return this.http.post<Consulta>(this.apiUrl, consulta, this.httpOptions);
  }

  // Listar consultas (com filtro opcional por data)
  listarConsultas(data?: string): Observable<Consulta[]> {
    let params = new HttpParams();
    if (data) {
      params = params.set('data', data);
    }
    
    return this.http.get<Consulta[]>(this.apiUrl, { params });
  }
}
