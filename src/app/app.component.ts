import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(document:keydown)': 'handleKeyboardEvent($event)'
  }

})
export class AppComponent implements OnInit {
  title = 'angular-calculator';
  view = '0';
  firstNum = null;
  operator = null;
  secondNum = null;

  Str_TeclaPresed='';

  handleKeyboardEvent(event: KeyboardEvent) {

    // console.log(event);

    this.Str_TeclaPresed = event.key.toLocaleLowerCase();

    if(
      this.Str_TeclaPresed === '+'
      || this.Str_TeclaPresed === '-'
      || this.Str_TeclaPresed === '/'
      || this.Str_TeclaPresed === '*'
      || this.Str_TeclaPresed === '='
      || this.Str_TeclaPresed === 'enter'
      
    ){

    if(this.Str_TeclaPresed === 'enter') {
        this.Str_TeclaPresed = '=';
      }
      this.operatorPressed(this.Str_TeclaPresed);
    }
    if(
      this.Str_TeclaPresed === '0'
      || this.Str_TeclaPresed === '1'
      || this.Str_TeclaPresed === '2'
      || this.Str_TeclaPresed === '3'
      || this.Str_TeclaPresed === '4'
      || this.Str_TeclaPresed === '5'
      || this.Str_TeclaPresed === '6'
      || this.Str_TeclaPresed === '7'
      || this.Str_TeclaPresed === '8'
      || this.Str_TeclaPresed === '9'
    ) {
      this.numPressed(this.Str_TeclaPresed);
    }
    
    if(this.Str_TeclaPresed === '.') {
      this.decimalPressed();
    }
  }

  ngOnInit() {
  }

  public acPressed() {
    this.view= '0';
    this.firstNum = null;
    this.operator = null;
    this.secondNum = false;
  }

  public numPressed(i) {
    console.log(i);
    if(this.secondNum) {
      this.view= i;
      this.secondNum = false;
    }else{
      this.view=== '0'? this.view= i: this.view+= i;
    }
  }

  decimalPressed(){
    if(!this.view.includes('.')) {
      this.view+= '.';
    }
  }

  private Calculation(op, op2) {
    switch(op){
        case '+':
        return this.firstNum += op2; 
        case '-': 
        return this.firstNum -= op2; 
        case '*': 
        return this.firstNum *= op2; 
        case '/': 
        return this.firstNum /= op2; 
        case '=':
        return op2;
    }
  }

  public operatorPressed(op) {
    console.log(op);
    if(this.firstNum === null) {
      this.firstNum = Number(this.view);
    }else if(this.operator) {
      const result = this.Calculation(this.operator , Number(this.view))
      this.view= String(result);
      this.firstNum = result;
    }
    this.operator = op;
    this.secondNum = true;
    console.log(this.firstNum);
  }
}
