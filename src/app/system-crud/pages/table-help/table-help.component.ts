import { Component } from '@angular/core';
import { SystemCrudService } from '../../services/system-crud.service';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table-help',
  templateUrl: './table-help.component.html',
  styleUrls: ['./table-help.component.css']
})
export class TableHelpComponent {

  // properties
  public dataForTable!: Observable<any>
  public isLoading: boolean = false

  constructor(
    private firestore: Firestore,
    private systemService: SystemCrudService ){
      this.getDataForTable()
    }


  public getDataForTable(): void {

    this.isLoading = true;

    // * get reference to the collection users in firestore
    const collectionInstance = collection(this.firestore, 'users')

    // * suscribe to changes in the collection using collectionData
    collectionData( collectionInstance, {idField: 'id'} )
    .subscribe( value => {
      console.log(value)
    })

    setTimeout(()=>{
      // * assing the collection data to the property
      this.dataForTable = collectionData( collectionInstance, {idField: 'id'} )
      this.isLoading = false
    },1500)

  }



}
