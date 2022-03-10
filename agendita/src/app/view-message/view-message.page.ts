import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contacto, DataServiceContacto } from '../data.service';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewMessagePage implements OnInit {
  public contacto: Contacto;

  constructor(
    private data: DataServiceContacto,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
  this.getContacto(id);     
  }

  getBackButtonText() {

    this.router.navigate(["/home"]);

    // const win = window as any;
    // const mode = win && win.Ionic && win.Ionic.mode;
    // return mode === 'ios' ? 'Inbox' : '';
  }


  getContacto(id:string) {


    return this.data.getContactoById(id).subscribe({

      next: resp => { 
       console.log(resp)
       this.contacto=resp;
      },
      error: error =>{
      }
  });
  }


  updateContacto(){
// terminar
    this.data.updateContacto(this.contacto);
    this.router.navigate(["/home"])

  }

  borrarContacto(){
    // terminar
        this.data.deleteContacto(this.contacto);
        this.router.navigate(["/home"])
    
      }
}
