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

}
