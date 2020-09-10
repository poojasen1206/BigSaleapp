import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-upload-items',
  templateUrl: './upload-items.component.html',
  styleUrls: ['./upload-items.component.css']
})
export class UploadItemsComponent implements OnInit {

  constructor(private http:HttpClient, private formBuilder:FormBuilder) { }
  baseUrl = 'http://localhost/angular-shopping/';
  uploadfile;
  file;
  addForm:FormGroup;
  //selectedfile:File;
  ngOnInit(): void {
   
    this.addForm = this.formBuilder.group({
      id : [],
      title :['', Validators.required],
      price :['', Validators.required],
      description :['', Validators.required],
      quantity :['', Validators.required],
      image :['', Validators.required],
    })


  }
onFileSelect(event){
 this.file = event.target.files[0];
 //this.uploadfile.push(event.target.files[0]);
 this.addForm.get('image').setValue(this.file);

}
onSubmit(){
  console.log(this.addForm.value);
   const formData = new FormData();
      formData.append('uploadimg', this.addForm.get('image').value);   
      formData.append('title', this.addForm.get('title').value);
      formData.append('price', this.addForm.get('price').value);
      formData.append('description', this.addForm.get('description').value);
      formData.append('quantity', this.addForm.get('quantity').value);
      
      
       this.http.post<any>(this.baseUrl+'insert.php',formData).subscribe(
         (res)=>console.log(res),
         (err)=>console.log(err)
      );
       this.addForm.reset();
}

}
