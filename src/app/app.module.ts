import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AuthService} from './services/auth.service';

import {RestService} from './services/rest.service';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ItemComponent } from './item/item.component';
import { CategoryComponent } from './category/category.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CrudService} from './services/crud.service';


@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    LoginComponent,
    RegisterComponent,
    ItemComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestService, AuthService, CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
