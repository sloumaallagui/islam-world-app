import { Component, OnInit } from '@angular/core';
import { NavbarLink } from './../classes/navbar-link';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  links:NavbarLink[]=[];

  constructor() {
    for(let i=0; i<15;i++){
      this.links.push(new NavbarLink("",""));
      }
  }

  ngOnInit(): void {

  }
  public setLinks(str:string=''){
    if(str=="PrayerTimes"){
    this.links[0].name="اليوم";
    this.links[0].link="/prayertimes/today";
    this.links[1].name="غدا ";
    this.links[1].link="/prayertimes/tomorrow";

  }
  }

}
