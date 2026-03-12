import { Component, computed, effect, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
 interface lunchItem{
  name:string,
  calories:number
 };
@Component({
  selector: 'app-lunch-list',
  imports: [CommonModule],
  templateUrl: './lunch-list.html',
  styleUrl: './lunch-list.css',
})
export class LunchList {
  constructor(){
    effect(()=>{
      console.log("lunch item array:",this.lunchItemsArray())}
    )
  }
lunchItemsArray=input<lunchItem[]>([])
lunchChange = output<lunchItem[]>();
newItem:lunchItem={
  name:"",
  calories:0
}
formattedItems=computed(()=>this.lunchItemsArray().map(items=>`${items.name} - ${items.calories} kcal`))
deleteLunchItem(index:number){
  const updated=this.lunchItemsArray().filter((_,i)=>i!=index);
  this.lunchChange.emit(updated);
  
}
}
