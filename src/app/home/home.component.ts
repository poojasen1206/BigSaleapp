import { Component, OnInit } from '@angular/core';
import {ServiceOneService} from '../service-one.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
//import {Items} from '../model/items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:ServiceOneService) { }
item:any;
  ngOnInit(): void {
     // console.log(this.addForm.value);
     this.http.getAllitems()
     .subscribe((data:any) =>{
        this.item = data;
        console.log(this.item);
     });
  }

}
