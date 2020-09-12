import { Component, OnInit } from '@angular/core';
import {CartinfoService} from '../cartinfo.service';
//import {Router, Params, ActivatedRoute} from '@angular/router';
import {Items} from '../model/items';


@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
  public cardData : Items[] = [];
  items:any;
  size: number;
  quantityvar:number=1;
  itmeindex:number;
  cardtotal=0;
  item_qty:any=[];
  total;
  quantity: number = 0;
  qyt;
  
  constructor(private Cartinfomsg:CartinfoService) {   }
    
   ngOnInit():void {
    this.Cartinfomsg.msginfo$
    .subscribe((products:any) => {
      this.size = products.length;
       console.log(this.size);
      if (!this.cardData.some((item) => item.id == products.id)) {
       this.cardData.push(products);
       this.cardtotal=0;
       this.cardData.forEach(item =>{
         this.cardtotal += (item.quantity*item.price)
         //console.log(item)
       })
     
       }  
       //console.log(this.cardData);
   
      });
       

      //  $(document).ready(function(){
      //    //alert('quantity');
      //    $("#quantity").change(function(){
      //      //alert('quantity');
      //      var quantity = $('#quantity').val();
      //       alert(quantity);
      //    });
      //  });
   }

   
  

   removeitem(itmindex){
     this.itmeindex = itmindex;
   // console.log(this.itmeindex);
    this.cardData.splice(itmindex, 1);  
   
   }
  
  //  incrementQty(addeditem:any){
  //    var i:number;
  //   this.qyt  = addeditem.quantity++;
   
  //  }
     
     //decrements item
     
    //  decrementQty(addeditem:any){
           
    //      if (addeditem.quantity > 1) {
    //         addeditem.quantity--;
    //    }
               
    // }
    //  checkout(){
    //    //this.router.navigate(['/checkout']);
    //  }
             
     // this.cardData.push(products);
  

 
    
     

}
