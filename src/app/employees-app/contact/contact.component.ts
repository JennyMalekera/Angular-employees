import { Component, OnInit } from '@angular/core';

function address(path:string) {
  let myIframe = <HTMLScriptElement>document.getElementById("myIframe");
  let url_string = "https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q="+path;
  myIframe.src = url_string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  telephone!:string;
  constructor() { }

  ngOnInit(): void {

  }

  Joburg(){
    address("Ext 6, Adcorp Place, 102 Western Service Road (parallel to the M1 Gallo Manor, Woodlands, Sandton, 2191");
    this.telephone="Tel: +27 11 024 4451 ";
  }

  CapeTown(){
    address("Century City, Cape Town, 7441");
    this.telephone="Tel: +27 21 525 7756 Or Tel: +27 21 525 7760";
  }

  India(){
    address("C-161, C Block, Sector 63, Noida, Uttar Pradesh 201301, India");
    this.telephone="Tel: +91 (120) 475490";
  }

}
