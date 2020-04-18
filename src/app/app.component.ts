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

  constructor() { }

  ngOnInit() {
  }

  public numPressed(v: string){
    console.log(v);
    if(this.secondNum){
      this.view= v;
      this.secondNum = false;
    }else{
      this.view=== '0'? this.view= v: this.view+= v;

    }
  }
  decimalPressed(){
    if(!this.view.includes('.')){
      this.view+= '.';
    }
  }
  private Calculation(op, secondOp){
    switch(op){
      case '+':
        return this.firstNum += secondOp; 
        case '-': 
        return this.firstNum -= secondOp; 
        case '*': 
        return this.firstNum *= secondOp; 
        case '/': 
        return this.firstNum /= secondOp; 
        case '=':
        return secondOp;
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
  public acPressed(){
    this.view= '0';
    this.firstNum = null;
    this.operator = null;
    this.secondNum = false;
  }
}
