import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature:string = 'recipe';

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCQ8bstysqy3FWKbIvGVCL9byY-OD7CJq4",
      authDomain: "ng-recipeb.firebaseapp.com"
    });
  }
}

