import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-billings',
  templateUrl: './billings.component.html',
  styleUrls: ['./billings.component.css']
})
export class BillingsComponent implements OnInit {

  clientInfo!: any;
  constructor(private clientService: ClientService){}

  ngOnInit(): void {
      this.getClient();
  }

  getClient(){
    this.clientService.getClient().subscribe((data)=>{
      console.log(data)
      this.clientInfo = data;
    })
}
}
