import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageconverterService {
  reader = new FileReader();
  constructor() { }
  public convert(buffer){
      return new Promise((resolve,reject)=>{
        let str = String.fromCharCode.apply(null,new Uint8Array(buffer.data))
        resolve(str);
      })
  }
}
