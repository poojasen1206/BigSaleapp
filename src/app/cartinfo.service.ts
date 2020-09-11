import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartinfoService {

  private subject: BehaviorSubject < string > = new BehaviorSubject < string > (null);
 //subject = new Subject();
 //private subject = new Subject();

  constructor(private Cartinfomsg:CartinfoService) { }

sendMsg(product){
  //console.log(product);
  this.subject.next(product) ; //triggering an event
}
public getMsg(): Observable < string > {
  return this.subject;
}
//msginfo$ = this.subject.asObservable();
// getMsg(){
  //console.log('hjgjg');
 //  return this.subject.asObservable();
 //}

}
