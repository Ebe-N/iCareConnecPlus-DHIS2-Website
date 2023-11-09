import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { AccountComponent } from './home/account/account.component';
import { HomeStartComponent } from './home/home-start/home-start.component';
import { DropdownDirective } from './shared/dropdown.directives';
import { FormsModule } from '@angular/forms';
import { HomeDetailsComponent } from './home/home-details/home-details.component';
import { HomeTestimonialsComponent } from './home/home-testimonials/home-testimonials.component';



@NgModule({
  declarations: [
    AppComponent,
    PricingComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AccountComponent,
    HomeStartComponent,
    DropdownDirective,
    HomeDetailsComponent,
    HomeTestimonialsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
