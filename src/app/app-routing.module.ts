import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UploadItemsComponent } from './upload-items/upload-items.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  {
    path: '', redirectTo:'/', pathMatch: 'full'
   },
   {
    path:'', component:HomeComponent
  },
  {
    path:'about-us', component:AboutUsComponent
  },
  {
    path:'upload-items', component:UploadItemsComponent
  },
  {
    path:'contact-us', component:ContactUsComponent
  },
  {
    path:'details/:id', component:ViewDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
