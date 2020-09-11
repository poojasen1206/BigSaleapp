import { Component, OnInit } from '@angular/core';
import {ServiceOneService} from '../service-one.service';
import {CartinfoService} from '../cartinfo.service';

//import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

import {Items} from '../model/items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:ServiceOneService,private cartservice:CartinfoService,private router:Router) { }
item:any;
productItem:Items;
  ngOnInit(): void {
     // console.log(this.addForm.value);
     this.http.getAllitems()
     .subscribe((data:any) =>{
        this.item = data;
        //console.log(this.item);
     });
  }
   ViewDetails(item:Items): void {
    this.router.navigate(['details/'+item.id])
    
 }
  onclickAddtocart(item:Items){
    this.cartservice.sendMsg(item);
    //console.log(item);
  }
}
