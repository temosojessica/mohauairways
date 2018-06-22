import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  name:string;
  surname:string;
  age:string;
  date:string;
  travelType:string;
 
 
  
  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => [
      this.name = params['name'],
      this.surname = params['surname'],
      this.age = params['age'],
      this.date = params['date'],
      this.travelType = params['travelType']
    ]);

    console.log(this.name);
    console.log(this.surname)
    console.log(this.age);
    console.log(this.date)
    
  }

}
