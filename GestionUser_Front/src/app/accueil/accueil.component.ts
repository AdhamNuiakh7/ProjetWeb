import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Client } from '../clients';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports:[CommonModule,RouterModule,HttpClientModule,FormsModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  public clients!: Client[] ; 

  constructor(private clientService: ClientsService){}
  
  ngOnInit() {
   this.getClients(); 
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

}
