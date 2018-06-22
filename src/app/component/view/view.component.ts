import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private routes:Router,private activeRoute:ActivatedRoute) { }
  name:string;
  surname:string;
  age:string;
  date:string;
  travelType:string;

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
     this.name = params['name'];
      this.surname = params['surname'];
      this.age = params['age'];
      this.date = params['date'];
      this.travelType = params['travelType']; 
    }
      

    );


      console.log(this.name),
      console.log(this.surname);
      console.log(this.age),
      console.log(this.date),
      

      this.routes.navigate(['navbar/details']),{queryParams:{name:this.name,surname:this.surname,age:this.age,date:this.date }
  
  }

  }}
