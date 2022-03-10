
	
import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
 
export interface Contacto {
  id?: string;
  nombre: string;
  apellidos:string;
  tlf: string;
  email: string;
  img:string;
}
 
@Injectable({
  providedIn: 'root'
})
export class DataServiceContacto {
 
  constructor(private firestore: Firestore) { }
 
  getContactos(): Observable<Contacto[]> {
    const notesRef = collection(this.firestore, 'notes');
    return collectionData(notesRef, { idField: 'id'}) as Observable<Contacto[]>;
  }
 
  getContactoById(id): Observable<Contacto> {
    const noteDocRef = doc(this.firestore, `notes/${id}`);
    return docData(noteDocRef, { idField: 'id' }) as Observable<Contacto>;
  }
 
  addContacto(contacto: Contacto) {
    const notesRef = collection(this.firestore, 'notes');
    return addDoc(notesRef, contacto);
  }
 
  deleteContacto(contacto: Contacto) {
    const noteDocRef = doc(this.firestore, `notes/${contacto.id}`);
    return deleteDoc(noteDocRef);
  }
 
  updateContacto(contacto: Contacto) {
    const noteDocRef = doc(this.firestore, `notes/${contacto.id}`);
    return updateDoc(noteDocRef, { nombre: contacto.nombre,email:contacto.email,
        img:contacto.img, apellidos:contacto.apellidos, tlf: contacto.tlf });
  }
}