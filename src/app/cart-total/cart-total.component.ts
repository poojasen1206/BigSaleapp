import { Component, OnInit } from '@angular/core';
import {CartinfoService} from '../cartinfo.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {Items} from '../model/items';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.css']
})
export class CartTotalComponent implements OnInit {
  
  public cardData : Items[] = [];
  //items:any;
   
  constructor(private Cartinfomsg : CartinfoService) { }

  ngOnInit(): void {
    this.Cartinfomsg.msginfo$
    .subscribe((products:any) => {
     
      if (!this.cardData.some((item) => item.id == products.id)) {
       this.cardData.push(products);
          
      }else{
        alert('This item already added')
      }
       //console.log(this.cardData.length);
   
      });
  }

}
