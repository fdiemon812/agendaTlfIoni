import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto, DataServiceContacto } from '../data.service';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Matt Chorsey',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false
    }
  ];

  constructor(private data:DataServiceContacto) { }

  public getContactos():Observable< Contacto[]> {


    return this.data.getContactos();
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
