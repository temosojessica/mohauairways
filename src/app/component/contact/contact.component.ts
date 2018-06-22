import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
 @Input()FirstName : "";
 @Input()Lastname  : "";
 @Input()Country   : "";
 @Input()Subject   : "";
  constructor(private routes:Router) { }

  ngOnInit() {
  console.log(this.FirstName)
  console.log(this.Lastname)
  console.log(this.Country)
  console.log(this.Subject)

  }
  submit(){

    this.routes.navigate(['home2'],{queryParams:{FirstName:this.FirstName,lastname:this.Lastname,country:this.Country,Subject:this.Subject}});
 
  }
}
