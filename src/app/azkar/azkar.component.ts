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
    fetch('./assets/azkar2.json')
    .then(response => response.json())
    .then(res => {this.data=res.data;
      
      console.log(res);
    })
    .catch(err => console.error(err));
  }

  getAzkarByCategorie(categorie:string='http://www.hisnmuslim.com/api/ar/27.json'){

    fetch(categorie)
    .then(response => response.json())
    .then(res => {
      let key=Object.keys(res)[0];
       console.log( res[key]);


      this.data=res[key];
      console.log(res[key]);
    }
  )

  }

}
