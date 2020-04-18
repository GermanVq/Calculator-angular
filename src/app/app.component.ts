import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   

})
export class AppComponent implements OnInit {
  title = 'angular-calculator';
  view = '0';
  firstNum = null;
  operator = null;
  secondNum = false;


  ngOnInit() {
  }
  public acPressed(){
    this.view= '0';
    this.firstNum = null;
    this.operator = null;
    this.secondNum = false;
  }
  public numPressed(i: string){
    console.log(i);
    if(this.secondNum){
      this.view= i;
      this.secondNum = false;
    }else{
      this.view=== '0'? this.view= i: this.view+= i;

    }
  }
  decimalPressed(){
    if(!this.view.includes('.')){
      this.view+= '.';
    }
  }
  private Calculation(op, op2){
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

  public operatorPressed(op: string){
    console.log(op);

    if(this.firstNum === null){
      this.firstNum = Number(this.view);

    }else if(this.operator){
      const result = this.Calculation(this.operator , Number(this.view))
      this.view= String(result);
      this.firstNum = result;
    }
    this.operator = op;
    this.secondNum = true;

    console.log(this.firstNum);
 
  }
 
}
