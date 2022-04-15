import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-azkar',
  templateUrl: './azkar.component.html',
  styleUrls: ['./azkar.component.css']
})
export class AzkarComponent implements OnInit {
  data:any;

  constructor() { }

  ngOnInit(): void {
    this.getAzkar();
  }
  getAzkar(){
    fetch('./assets/azkar.json')
    .then(response => response.json())
    .then(res => {this.data=res
    })
    .catch(err => console.error(err));
  }

}
