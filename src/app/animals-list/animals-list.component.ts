import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css']
})
export class AnimalsListComponent {
  animals:any
  oszlopok:any
  constructor(
    private base: BaseService, 
    private config:ConfigService){
   
    this.oszlopok=this.config.getOszlopok() 

    this.base.getAnimals().subscribe(
      (res)=>this.animals=res
    )
  }
}
