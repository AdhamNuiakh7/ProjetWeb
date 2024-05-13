import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';

import { ClientsService } from '../clients.service';
import { Client } from '../clients';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone:true,
  imports:[CommonModule,RouterModule,HttpClientModule,FormsModule,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {
  public clients!: Client[] ; 
  public editClient!: Client | null ;
  public deletClient!: Client | null;

  constructor(private clientService: ClientsService, private formBuilder: FormBuilder){}

  registrationForm!: FormGroup;
  
  ngOnInit() {
   this.getClients(); 
   this.registrationForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.maxLength(10)]],
    name: ['', [Validators.required, Validators.maxLength(20)]],
    adresse: ['', [Validators.required, Validators.maxLength(30)]],
    company: ['', [Validators.required]],
});
  }

  public getClients(): void {
    this.clientService.getClients().subscribe({
      next: (response: Client[]) => {
        this.clients = response;
        console.log(this.clients);
      },
      error: (err: HttpErrorResponse) => {
        alert(err.message);
        
        
      }
    
    });
  }
  public onAddClient(addForm: NgForm): void {
    document.getElementById('add-employee-form')?.click();
    this.clientService.addClient(addForm.value).subscribe({
      next: (response: Client) => {
        console.log(response);
        this.getClients();
        addForm.reset();
      },
      error: (err: HttpErrorResponse) => {
        alert(err.message);
        
      }
    });
  }
  public onUpdateClient(client: Client): void {
   
    this.clientService.updateClient(client).subscribe({
      next: (response: Client) => {
        console.log(response);
        this.getClients();
      },
      error: (err: HttpErrorResponse) => {
        alert(err.message);
      }
    });
  }
  public onDeleteClient(clientId: number ): void {
   
    this.clientService.deleteClient(clientId).subscribe({

    
      next: (response: void) => {
        this.getClients();
      },
      error: (err: HttpErrorResponse) =>{
        alert(err.message);
      }
      
  });
  }


  public onOpenModal(client: Client | null, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if(mode === 'add'){
      button.setAttribute('data-target', '#addClient');
    }
    if(mode === 'edit'){
      this.editClient = client ;
      button.setAttribute('data-target', '#updateClient');
    }
    if(mode === 'delete'){
      this.deletClient = client;
      button.setAttribute('data-target', '#deletClient');
    }

    container?.appendChild(button);
    button.click();
}

}

