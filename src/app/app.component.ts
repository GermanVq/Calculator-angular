import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   

})
export class AppComponent {
  title = 'angular-calculator';
  subText = ''; 
  mainText = ''; 
  operand1: number; 
  operand2: number; 
  operator = ''; 
  calculationString = ''; 

}
