import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  // url ="https://localhost:7172/api/Animals/"
  url ="https://fnovenyrtdb.firebaseio.com/animals.json/"

  private animalSub = new Subject()

  constructor(private http:HttpClient) {
    this.loadAnimals();
   }

  loadAnimals(){
    this.http.get(this.url).subscribe({
      next:(res)=> this.animalSub.next(res),
      error:(res)=>console.log("Hiba az adatok lekérésénél:", res)
    }
    )
  }

  getAnimals(){
    return this.animalSub
  }

  postAnimal(body:any){
    this.http.post(this.url,body).forEach(
      ()=>this.loadAnimals()
    )
  }

  putAnimal(body:any){
    this.http.put(this.url+body.id,body).subscribe(
      ()=>this.loadAnimals()
    )
  }

  deleteAnimal(body:any){
    this.http.delete(this.url+body.id).forEach(
      ()=>this.loadAnimals()
    )
  }

}
