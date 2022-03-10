import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from '../data.service';
import { Message } from '../services/data.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() contacto: Contacto;

  constructor(private router:Router) { }

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }


  entrarContacto(id:string){

    this.router.navigate(["/message", id]);
  }
}
