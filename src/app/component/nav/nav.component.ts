import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() Name;
  @Input() page;

  @Input() name:string;
  @Input() surname:string;
  @Input() age:string;
  @Input() date:string;
  @Input() travelType:string; 

  constructor( private routes:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit() {
  }
  
  navigator(){
    if(this.Name == 'View'){
      this.routes.navigate(['/home/view'],{queryParams:{name:this.name,surname:this.surname,age:this.age,date:this.date,travelType:this.travelType}})
    }else if(this.Name == 'Event'){
      this.routes.navigate(['/home/event'],{queryParams:{name:this.name,surname:this.surname,age:this.age,date:this.date,travelType:this.travelType}})
    }
  }
}
