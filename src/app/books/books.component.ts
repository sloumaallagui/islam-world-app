import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit,AfterViewInit {
  data:any;
  constructor(public window: Window) { }
ngAfterViewInit():void{
  //this.getBooks();
}
  ngOnInit(): void {
    this.getBooks();

  }
  openPDF(str:string='https://d1.islamhouse.com/data/ar/ih_books/single_010/ar-a7kam-alsunan-mokhtasr.pdf'){
    window.open(str, '_blank', 'fullscreen=yes');
  }
  getBooks(){

    fetch('https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/showall/ar/showall/1/25/json')
    .then(response => response.json())
    .then(res => {this.data=res.data
    })
    .catch(err => console.error(err));



  }


}
