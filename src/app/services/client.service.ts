import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientForm } from '../client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/client";
  client: ClientForm[] = []

  getClient() {
    return this.http.get<any>(this.url);
  }

  addClient(client:any) {
    return this.http.post<ClientForm[]>(this.url, client);
  }
}
