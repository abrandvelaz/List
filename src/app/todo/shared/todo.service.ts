import { SUPER_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  toDoList: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }

  getToDoList(){
    this.toDoList = this.firebasedb.list('titles');
    return this.toDoList;
  }

  addTitle(title: string){
    this.toDoList.push({
      title: title,
      isChecked: false
    });
  }

  checkOrUnCheckTitle($key: string, flag: boolean){
    this.toDoList.update($key, { isChecked: flag });
  }

  removeTitle($key: string){
    this.toDoList.remove($key);
  }

  removeAllTitle(){
    this.toDoList.remove();
  }

  countTitles(){
    let aux = this.toDoList.snapshotChanges.length;
    console.log(aux);
    return aux;
  }

  

}
