import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl!: 'https://sheet.best/api/sheets/822fc01f-2e95-4790-b04d-c9c29185c6cb';
  httpOptions = {
    headers: new HttpHeaders ({
      "Content-type": "application/json",
      
    })
  }

  constructor(private httpClient: HttpClient) { }

  // Retorna a lista de usuarios
  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl)
  }

  //Salva usuario no banco
  postUser(user: User):Observable<User>{
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions)
  }

  // Exclui o usuario do banco delete
  deleteUser(id: number):Observable<User> {
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)
  }

  // Edita usuario update
  updateUser(id: string, user: User):Observable<User> {
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user, this.httpOptions);
  }

  // Lista usuario unico
  getUser(id: string):Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`)
  }
}
