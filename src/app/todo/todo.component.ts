import { timestamp } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoComponent]
})
export class TodoComponent implements OnInit {
  toDoListArray: any[];
  toDoListArrayDone: any[];
  constructor(private toDoService: TodoService) { }

  ngOnInit(){
    this.toDoService.getToDoList().snapshotChanges()
    .subscribe(item => {
      this.toDoListArray = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.toDoListArray.push(x);
      })

      this.toDoListArray.sort((a,b) =>{
        return a.isChecked - b.isChecked;
      })
    });

    this.toDoService.getToDoListDone().snapshotChanges()
    .subscribe(item => {
      this.toDoListArrayDone = [];
      console.log(item)
      item.forEach(element => {
        console.log(x)
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.toDoListArrayDone.push(x);
      })
      console.log(this.toDoListArrayDone);
    });
  }
  
  onAdd(itemTitle) {
    this.toDoService.addTitle(itemTitle.value);
    itemTitle.value = null;
    for (let i of this.toDoListArray) {
      console.log (this.toDoListArray[i]);
    }
  }

  alterCheck($key: string,isChecked,item) {
    this.toDoService.checkOrUnCheckTitle($key,isChecked+1);
    if(isChecked == 1){
      this.toDoService.addTitleDone(item.title);
      this.onDelete($key);
    }
    item = null;
  }

  onDelete($key : string){
    this.toDoService.removeTitle($key);
  }

  onDeleteAll(){
    this.toDoService.removeAllTitle();
  }

  onDeleteAllDone(){
    this.toDoService.removeAllTitleDone();
  }

  editItem($key: string,item,itemTitle){
    item.title = itemTitle.value;
    this.toDoService.getItemFirebase($key,item);
    itemTitle.value = null;
  }

  //Variables usadas para ordenar 
  arriba: boolean;
  ordenar: boolean;
  //Ordenación de lista normal
  ordenaTareasNombre(arriba: boolean = true){
    this.toDoListArray = this.toDoListArray.sort( (a, b) => {
      if(a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase()) {
        if (arriba) {
          return -1;
        } else {
          return 1
        }
      }else if (a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase()){
        if (arriba) {
          return 1;
        } else {
          return -1
        }
      }
      else return 0
    });
    this.ordenar = true;
    this.arriba = arriba;
  }

  
  ordenaTareasFecha(arriba: boolean = true){
    this.toDoListArray = this.toDoListArray.sort( (a, b) => {
      return a.timestamp - b.timestamp;
    })
  }

  ordenarPorPrioridad(){
    this.toDoListArray = this.toDoListArray.sort((a,b) =>{
      return a.isChecked - b.isChecked;
    })
  }
  
  //Ordenación de la lista de tareas hechas
  ordenaTareasNombreDone(arriba: boolean = true){
    this.toDoListArrayDone = this.toDoListArrayDone.sort( (a, b) => {
      if(a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase()) {
        if (arriba) {
          return -1;
        } else {
          return 1
        }
      }else if (a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase()){
        if (arriba) {
          return 1;
        } else {
          return -1
        }
      }
      else return 0
    });
    this.ordenar = true;
    this.arriba = arriba;
  }

  
  ordenaTareasFechaDone(arriba: boolean = true){
    this.toDoListArrayDone = this.toDoListArrayDone.sort( (a, b) => {
      return a.timestamp - b.timestamp;
    })
  }
  
}
