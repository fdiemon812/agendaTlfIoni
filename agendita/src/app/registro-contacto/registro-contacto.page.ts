import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceContacto } from '../data.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-registro-contacto',
  templateUrl: './registro-contacto.page.html',
  styleUrls: ['./registro-contacto.page.scss'],
})
export class RegistroContactoPage implements OnInit {


  nombre:string;
  apellidos:string;
  tlf:string;
  img:string;
  email:string;

  constructor(private dataService:DataServiceContacto, private router:Router) { }

  ngOnInit() {
  }



  guardarContacto(){

    const contacto={

    nombre:this.nombre,
    apellidos:this.apellidos,
    tlf:this.tlf,
    img:"",
    email:this.email
    }

    this.dataService.addContacto(contacto);
    this.router.navigate(["home"])


  }

}
