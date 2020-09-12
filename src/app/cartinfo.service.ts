import { Injectable } from '@angular/core';
import { Subject,BehaviorSubject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartinfoService {

  //private subject: BehaviorSubject < string > = new BehaviorSubject < string > (null);
 subject = new Subject();
 //private subject = new Subject();

  constructor(private Cartinfomsg:CartinfoService) { }

sendMsg(product){
  //console.log(product);
  this.subject.next(product) ;      //triggering an event
}
// getMsg(): Observable<any> {
//    return this.subject;
//  }
 msginfo$ = this.subject.asObservable();
// getMsg(){
//     return this.subject.asObservable();
//  }

}
