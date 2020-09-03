import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rori-clase1';
  edadUno: string;
  edadDos: string;
  promedio=0;
  suma=0;

  calcular(){
    if(this.edadUno == null || this.edadUno == '')
      this.edadUno= '0';
    if(this.edadDos == null || this.edadDos == '')
      this.edadDos= '0';
    this.suma= Number.parseInt(this.edadUno) + Number.parseInt(this.edadDos);
    this.promedio=(this.suma)/2;
  }
  limpiar(){
    this.edadUno="";
    this.edadDos="";
  }
}
