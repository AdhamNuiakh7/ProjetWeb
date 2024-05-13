import { Injectable } from '@angular/core';
import { Client } from './clients';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
private apiServiceUrl = environment.apiBaseUrl;
constructor(private http: HttpClient){}

public getClients() : Observable<Client[]> {
 return this.http.get<Client[]>(`${this.apiServiceUrl}/clients/all`);
}

public addClient(Client: Client): Observable<Client>{
  return this.http.post<Client>(`${this.apiServiceUrl}/clients/add`, Client);
}

public updateClient(Client: Client): Observable<Client>{
  return this.http.put<Client>(`${this.apiServiceUrl}/clients/update`, Client);
}

public deleteClient(ClientId: number): Observable<void>{
  return this.http.delete<void>(`${this.apiServiceUrl}/clients/delete/${ClientId}`);
}

 

}
