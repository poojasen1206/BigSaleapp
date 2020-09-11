import { Component, OnInit } from '@angular/core';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {ServiceOneService} from '../service-one.service';


@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  constructor(private http:ServiceOneService,
    private  router:Router, private routes:ActivatedRoute) { }
 
    itembyid;
  ngOnInit(): void {
    const routeParams = this.routes.snapshot.params; //using this fetch id from edit user 
    // console.log(routeParams.id);

    this.http.getItemById(routeParams.id).subscribe((data : any) => {
       //console.log(data)
       this.itembyid = data;
       
     });
  }
 
}
