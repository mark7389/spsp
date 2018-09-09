import { Injectable } from '@angular/core';
import { base64StringToBlob as toblob } from 'blob-util'
@Injectable({
  providedIn: 'root'
})
export class Base64toblobService {

  constructor() { }
  convert(base64){
        let contentType = base64.toString().split(":")[1].split(';')[0];
        let string = base64.toString().split(",")[1];
        let blob = toblob(string,contentType);
        return blob;
  }
}
