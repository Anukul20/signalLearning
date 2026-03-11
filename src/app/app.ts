import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

 interface lunchItem{
  name:string,
  calories:number
 };

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('lunch-planner');

 lunchItems=signal<lunchItem[]>([]);
newItem:lunchItem={
  name:"",
  calories:0
}
//when I add new Item, it should reflect in lunchItems
//  newItem=""
//  calorie:number;
 constructor(){


 }
 //computing length directly in html, did not use this line
 totalItems=computed(()=>this.lunchItems.length)

addItemToList(){
  this.lunchItems.update(oldvalues => [...oldvalues,this.newItem]);
   this.newItem={
    name:"",
    calories:0
   }

}

formattedItems=computed(()=>this.lunchItems().map(items=>`${items.name} - ${items.calories} kcal`))
totalCalories=computed(()=>this.lunchItems().reduce((sum,item)=>sum + Number(item.calories),0))

deleteLunchItem(index:number){
  this.lunchItems.update(newvalues=>newvalues.filter((newvalues,i)=>i!=index))
}
}
