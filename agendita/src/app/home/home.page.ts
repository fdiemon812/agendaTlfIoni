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
    this.getMessages();
  }

  


  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages() {


    return this.data.getMessages().subscribe;
  }


  addContacto(){
    this.router.navigate(["registro-contacto"])
  }

}
