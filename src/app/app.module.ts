import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { BookingformComponent } from './component/bookingform/bookingform.component';
import { AboutComponent } from './about/about.component';
import { EventComponent } from './component/event/event.component';
import { ViewComponent } from './component/view/view.component';
import { FormsModule } from '@angular/forms';
import { AppRoutes } from './app.routes.module';
import { RouterModule } from '@angular/router';
import { NavComponent } from './component/nav/nav.component';
import { ComponentComponent } from './component/component.component';
import { ContactComponent } from './component/contact/contact.component';
import { BookedComponent } from './component/booked/booked.component';
import { Home2Component } from './component/home2/home2.component'

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BookingformComponent,
    AboutComponent,
    EventComponent,
    ViewComponent,
    NavComponent,
    ComponentComponent,
    ContactComponent,
    BookedComponent,
    Home2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutes
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
