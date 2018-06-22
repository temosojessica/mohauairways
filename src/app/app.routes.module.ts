import { Home2Component } from './component/home2/home2.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ViewComponent } from './component/view/view.component';
import { EventComponent } from './component/event/event.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { BookingformComponent } from './component/bookingform/bookingform.component';
import { Routes, RouterModule } from '@angular/router'
import { componentFactoryName } from '@angular/compiler';

 const routes:Routes = [
    {path:'',component:BookingformComponent},
    {path:'homepage',component:HomepageComponent},
    {path: 'about', component: AboutComponent},
    {path:'contact', component: ContactComponent},
    {path:'home2', component: Home2Component},
];

    
    export const AppRoutes = RouterModule.forRoot(routes)