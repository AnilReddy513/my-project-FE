import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css'
})
export class ItemsListComponent {
  items:any[]=[];
  selectedId: any;

  newItem:any='';
  updateItem:any='';

constructor(public dataservice:DataserviceService){}

ngOnInit(){
  setTimeout(
    ()=>{
      this.loadItems()
},1000)

}
loadItems(){
  this.dataservice.getItems().subscribe((data:any)=>{
    this.items = data;
    console.log("items", this.items);
    
   })
}

startEdit(item:any){
this.selectedId={ ...item};
this.updateItem = item.name;
}

delete(id:number){
this.dataservice.delateItem(id).subscribe(()=> this.loadItems())
}


upDateItem(){
  
  if(this.selectedId && this.updateItem.trim()){
    this.dataservice.updateItem(this.selectedId.id, {name:this.updateItem}).subscribe(()=>{
      this.updateItem='';
      this.loadItems();
    })
  }

}
addItem(){
  this.dataservice.addItem(this.newItem).subscribe(()=>{
    this.newItem='';
    this.loadItems();
  })
}
}
