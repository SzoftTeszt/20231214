import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  oszlopok=[
    {key:"name", text:"Név", type:"Text"},
    {key:"kind", text:"Fajta", type:"Text"},
    {key:"kingLevel", text:"Királyság", type:"Number"},
    {key:"lovely", text:"Kedves fajta", type:"Checkbox"},
  ]
  constructor() { }
  
  getOszlopok(){
    return this.oszlopok
  }
}
