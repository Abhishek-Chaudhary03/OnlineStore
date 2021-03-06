import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }
  getConfig() {
    return environment.social;
  }
  getCartTotal()
  {
    let fakeresponse = "10";
    return Observable.create (
      observer => {
        setTimeout ( () => {
          observer.next(fakeresponse)
        },2000)
        }
    )
  }
  getUserStatus()
  {
    let fakeresponse = true;
    return Observable.create (
      observer => {
        setTimeout ( () => {
          observer.next(fakeresponse)
        },2000)
        }
    )
  }
  getProducts(collType)
  {
    let fakeresponse = {
      'category': "test",
       'scategory': "Test",
        'name' : "Product Type",
         'price': "300",
          '_id' : "123"
    };
    return Observable.create (
      observer => {
        setTimeout ( () => {
          observer.next(fakeresponse)
        },2000)
        }
    )
  }
  }

