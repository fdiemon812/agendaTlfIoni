import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from '../data.service';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  contactos: Contacto[]=[];
  constructor(private data: DataService, private router:Router) {}
  
  
  ngOnInit(): void {
    this.getContactos();
  }

  


  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getContactos() {


    return this.data.getContactos().subscribe({

      next: resp => { 
       console.log(resp)
       this.contactos=resp;
      },
      error: error =>{
      }
  });
  }


  addContacto(){
    this.router.navigate(["registro-contacto"])
  }

}
