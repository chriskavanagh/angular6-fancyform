import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

// interface for collection from firestore db.
interface Users {
  name: string;
  age: number;
  address: string;
  state: string;
  city: string;
}


@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.css']
})
export class FireComponent implements OnInit {

  userscollection: AngularFirestoreCollection<Users>;
  users: Observable<Users[]>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    //console.log(this.ref);
    this.userscollection = this.afs.collection('users')
    /* this.userscollection = this.afs.collection('users', ref => {
      // return ref.orderBy('age')
      return ref.where('age', '>', 40)
    }); */
    this.users = this.userscollection.valueChanges();
  }
  
  show(firstName:HTMLInputElement, lastName:HTMLInputElement){
    console.log(firstName.value);
    console.log(lastName.value);
}

}
