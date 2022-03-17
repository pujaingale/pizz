import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ContactComponent } from './contact/contact.component';
import { DelhiComponent } from './delhi/delhi.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { NoidaComponent } from './noida/noida.component';
import { PostsComponent } from './posts/posts.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'gallery',component:GalleryComponent,children:[
    {path:'noida',component:NoidaComponent},
    {path:'delhi',component:DelhiComponent}
  ]},
  {path:'product',component:ProductComponent},
  {path:'post',component:PostsComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:'addContact',component:AddContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
