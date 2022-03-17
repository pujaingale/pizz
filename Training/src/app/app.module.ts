import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UserIndPipe } from './Pipes/user-ind.pipe';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {ProductServiceService} from './product-service.service'
import { ProductComponent } from './product/product.component';
import { PostsComponent } from './posts/posts.component';
import { InterceptorService } from './interceptor.service';
import { AddProductComponent } from './add-product/add-product.component';
import { AddContactComponent } from './add-contact/add-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    UserIndPipe,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    NavComponent,
    ProductComponent,
    PostsComponent,
    AddProductComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [ProductServiceService,{
    provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
