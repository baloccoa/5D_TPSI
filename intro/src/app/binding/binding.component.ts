import { Component } from '@angular/core';

@Component({
  selector: 'binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  //variabile utilizzata per l'interpolazione di stringa
  numTests: number =25;

  //oggetto utilizzato per le proprietà vincolanti
  car ={
    model:"Alfa Romeo Giulia",
    img:"https://www.reportmotori.it/wp-content/uploads/2020/06/Alfa-Romeo-Giulia-Sprint-GTA-Stradale-9.jpg",
    available:false
  }

  //variabili per la proprietà vincolante class
  myClass:string="red";
  setBlueClass:boolean=false;

  //variabili per la direttiva ng class
  componentClasses={
    show:true,
    warning:false
  }
  formOk:boolean=false;
  admin:boolean=false;

  //oggetto utilizzato per la direttiva ng style
  componentStyle={
    'width':'300px',
    'height.px':100,
    'backgroundColor':'forestgreen'
  }

  //variabile utilizzata per 2-way binding, la variabile verrà aggiornata
  //import su app.module.ts
  textSizes:number=20;
  voto: number=6;
  username: string="";

  //vettore utilizzato per la direttiva ngfor
  ingredients:string[]  =[
    'avocado',
    'pomodoro',
    'lattuga',
    'maionese',
    'pane'
    ]

  //metodi
  getClick() {
    console.log("Btn clicked");
    this.car.available=!this.car.available;
    this.setBlueClass=!this.setBlueClass;
    this.myClass="blue";
    this.formOk=!this.formOk;
    this.admin=!this.admin;
  }

  inviaDati() {
    console.log("Nome utente inserito: "+this.username);
  }

  getColor() {
    if(this.voto>=6)
      return "lightgreen";
    else
      return "red";
  }

  delete(item:string) {
    this.ingredients=this.ingredients.filter(function (element){
      return element!=item;
    });
  }
}
