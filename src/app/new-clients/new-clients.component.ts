import { Component, OnInit } from '@angular/core';
import { ClientForm } from '../client';
import { NgForm } from '@angular/forms';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-new-clients',
  templateUrl: './new-clients.component.html',
  styleUrls: ['./new-clients.component.css']
})
export class NewClientsComponent implements OnInit {

  client: ClientForm = {
    name: '',
    occupation: '',
    projectType: '',
  }
  constructor(private clientService: ClientService) {}

  ngOnInit(): void {}

  addClient(form: NgForm){
    this.clientService.addClient(this.client).subscribe((data)=>{
      console.log(data)
      form.resetForm({
        name: '',
        occupation: '',
        projectType: '',
      })
    })
}
}
