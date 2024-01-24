import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-setup',
  templateUrl: './client-setup.component.html',
  styleUrls: ['./client-setup.component.css']
})
export class ClientSetupComponent implements OnInit {

  clientInfo!: any;
  constructor(private clientService: ClientService){}

  ngOnInit(): void {
      this.getClient();
  }

  getClient(){
    this.clientService.getClient().subscribe((data)=>{
      this.clientInfo = data;
    })
}
}
