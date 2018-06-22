import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
  @Input()FirstName : "";
  @Input()Lastname  : "";
  @Input()Country   : "";
  @Input()Subject   : "";
  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParams.subscribe(res =>{
      this.FirstName=res['FirstName'];
      this.Lastname=res['Lastname'];
      this.Country=res['Country'];
      this.Subject=res['Subject'];
    })
    console.log(this.FirstName);
    console.log(this.Lastname);
    console.log(this.Country);
    console.log(this.Subject);
  }
  
  
}
