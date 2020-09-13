import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Items} from './model/items';
import { ApiResponse } from './Model/api-response';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceOneService {

  constructor(private http:HttpClient, private router:Router) { }

  baseUrl = 'http://localhost/angular-shopping/';

  getAllitems():Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.baseUrl + 'getallItems.php');
   }
   
  getItemById(id:number):Observable<ApiResponse>{
    let httpHeaders = new HttpHeaders()
    .set('Content-Type','applicatin/json');
    let options ={
    headers: httpHeaders
    };
    return this.http.get<ApiResponse>(this.baseUrl + 'getById.php?id='+ id, options);
   }
 
   billingpost(billingdetails:Items):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.baseUrl + 'billingdetails.php', billingdetails);
  }
}
