import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css']
})
export class AnimalsListComponent {
  animals:any
  constructor(private base: BaseService){
    
    this.base.getAnimals().subscribe(
      (res)=>this.animals=res
    )
  }
}
