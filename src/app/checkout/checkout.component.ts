import { Component, OnInit } from '@angular/core';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ServiceOneService } from '../service-one.service';
import{FormGroup, Validators, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private http:HttpClient, private formBuilder:FormBuilder, private  router:Router,
    private routes: ActivatedRoute,private service:ServiceOneService) { }
  
    baseUrl = 'http://localhost/angular-shopping/';
      //selectedFile : File;
    Billingdetails : FormGroup;
  ngOnInit(): void {

    this.Billingdetails=this.formBuilder.group({
      id : [],
      fname :['', Validators.required],
      lname :['', Validators.required],
      email :['', Validators.required],
      address :['', Validators.required],
      city :['', Validators.required],
      state :['', Validators.required],
      zip :['', Validators.required],
      cardno :['', Validators.required],
      ccno :['', Validators.required],
      expmonth :['', Validators.required]

    })
  }
  onSubmit(){
    console.log(this.Billingdetails.value);
    this.service.billingpost(this.Billingdetails.value)
    .subscribe(data =>{
      console.log('success');
        this.router.navigate(['/thankyou']);
     });
     this.router.navigate(['/thankyou']);
    //this.Billingdetails.reset();
   // alert('new record have been submited');

  //  const formData = new FormData();
  //     formData.append('fname',this.Billingdetails.get('fname').value);
  //     formData.append('lname',this.Billingdetails.get('lname').value);
  //     formData.append('email',this.Billingdetails.get('email').value);
  //     formData.append('address',this.Billingdetails.get('address').value);
  //     formData.append('city',this.Billingdetails.get('city').value);
  //     formData.append('state',this.Billingdetails.get('state').value);
  //     formData.append('zip',this.Billingdetails.get('zip').value);
  //     formData.append('cardno',this.Billingdetails.get('cardno').value);
  //     formData.append('ccno',this.Billingdetails.get('ccno').value);
  //     formData.append('expmonth',this.Billingdetails.get('expmonth').value);
  //     this.http.post<any>('http://localhost/angular-shopping/'+'billingdetails.php',formData).subscribe(
  //       (res)=>console.log(res),
  //       (err)=>console.log(err)
  //     );
  //     this.Billingdetails.reset();
   }

}
