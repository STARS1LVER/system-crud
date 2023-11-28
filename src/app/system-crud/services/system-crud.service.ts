import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, doc, getDoc } from '@angular/fire/firestore';
import { Help } from '../interfaces/help.interface';
import { Route, Router, RouterEvent } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemCrudService {

  constructor(
    private router: Router,
    private firestore: Firestore  ) { }

  public async addDataTabla(help:Help): Promise<void>  {
    try {
      //  get a reference to the collection users in firestore
      const collectionInstance  = collection(this.firestore, 'users');

      //we call the method that will add us to the table
      await addDoc(collectionInstance,help)
      console.log('data has been added')
      //  go to route
      this.router.navigate(['/system/table'])

    } catch (error) {
      console.log('there was an error', error)
    }
  }

  public async getDataForTable(id:string) {
    try {
      //  get reference to the specific document in the collection 'users'
      const docRef = doc(this.firestore, 'users', id)

      const docSnap = await getDoc(docRef)

      //  if there is no document, return null
      if(!docSnap){
        console.log('document ')
        return null
      }
      
      if(docSnap.exists()){
        console.log('Document Data', docSnap.data())
        return {id: docSnap.id, ...docSnap.data()}

      } else {
        console.log('Document not exist')
        return null;
      }

    } catch (error) {
      console.log('Has a error')
      return null
    }
  }

}
