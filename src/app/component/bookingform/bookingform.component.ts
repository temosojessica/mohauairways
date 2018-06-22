import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent implements OnInit {
  name:string;
  surname:string;
  age:string;
  date:string;
  travelType:string;

  constructor(private routes:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  submit(){
    this.routes.navigate(['/homepage'],{queryParams:{name:this.name,surname:this.surname,age:this.age,date:this.date,travelType:this.travelType}});
  }
}
