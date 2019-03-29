import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-primer-proyecto';
  users = ['Michael','Pamela','Cindy','Kristy','Laura','Pame'];
  activated:boolean = false;
  name:string = 'Ryan Ryan'
  edad:number;
  address: {
    street:string;
    city:string;
  };
  hobbies:string[];
  constructor(){
    this.edad = 28;
    this.address={
      street:'222 Bruklyn',
      city:'Londres'
    };
    this.hobbies = ['read','writing'];

  }

}
