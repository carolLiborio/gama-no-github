import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CarolDeeva';
  disabled = false;
  customClass 
  soma(x:number, y:number){
    return x + y;
  }
  
  showInput(){
    console.log('tá digitando')
  }

  executeClick(){
    console.log('clicou!')
  }
}


