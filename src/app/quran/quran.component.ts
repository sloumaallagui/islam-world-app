import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quran',
  templateUrl: './quran.component.html',
  styleUrls: ['./quran.component.css']
})
export class QuranComponent implements OnInit {
  data:any;
  search:any;

  constructor() { }
  getQuran(){
    fetch("https://api.quran.sutanlab.id/surah/")
    .then(response => response.json())
    .then(res => {
       this.data=res.data;
       console.log(res.data);

    }
  )

  }
  ngOnInit(): void {
    this.getQuran();
  }

}
