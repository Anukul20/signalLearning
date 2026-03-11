import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lunch-planner');
 lunchItems=signal([""]);
//when I add new Item, it should reflect in lunchItems
 newItem=""
 constructor(){
  this.lunchItems.set([])
 }
 //computing length directly in html, did not use this line
 totalItems=computed(()=>this.lunchItems.length)
addItemToList(){
  this.lunchItems.update(oldvalues => [...oldvalues,this.newItem]);
  this.newItem=""
  
}
deleteLunchItem(index:number){
  this.lunchItems.update(newvalues=>newvalues.filter((_,i)=>i!=index))
}
}
