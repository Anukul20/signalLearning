import { Component, computed, ElementRef, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LunchList } from "./lunch-list/lunch-list";
import { CommonModule, JsonPipe } from '@angular/common';


 interface lunchItem{
  name:string,
  calories:number
 };
@Component({
  selector: 'app-root',
  imports: [FormsModule, LunchList,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('lunch-planner');
 itemName = viewChild<ElementRef>('itemname')
  
 
 lunchItems=signal<lunchItem[]>([]);

//when I add new Item, it should reflect in lunchItems
//  newItem=""
//  calorie:number;
newItem:lunchItem={
  name:"",
  calories:0
}
 constructor(){


 }
 addItemToList(){
  
  this.lunchItems.update(oldvalues => [...oldvalues,this.newItem]);
  console.log("updated list is: ",this.lunchItems())
   this.newItem={
    name:"",
    calories:0
   }
   this.itemName()?.nativeElement.focus();


}
 //computing length directly in html, did not use this line
 totalItems=computed(()=>this.lunchItems.length)
isAddDisabled=computed(()=> !this.newItem.name.trim()||this.newItem.calories<=0)


totalCalories=computed(()=>this.lunchItems().reduce((sum,item)=>sum + Number(item.calories),0))

updatedItems(updated:lunchItem[]){
  this.lunchItems.set(updated)
}
}
