import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BasketComponent } from './basket/basket.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'product-detail/:id', component: ProductDetailsComponent},
  {path: 'main-page', component: MainPageComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'user-register', component: UserRegisterComponent},
  {path: 'user-login', component: UserLoginComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductListComponent,
    MenuBarComponent,
    ProductDetailsComponent,
    MainPageComponent,
    BasketComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
