import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AzkarComponent } from './azkar/azkar.component';
import { BodyComponent } from './body/body.component';
import { BooksComponent } from './books/books.component';
import { MainComponent } from './main/main.component';
import { NewsSectionComponent } from './news-section/news-section.component';
import { PrayerTimesComponent } from './prayer-times/prayer-times.component';
import { QiblahComponent } from './qiblah/qiblah.component';


const routes: Routes = [
  {path:'news',component:NewsSectionComponent},
  {path:'',component:MainComponent} ,
  {path:'about',component:AboutComponent},
  {path:'prayertimes',component:PrayerTimesComponent},
  {path:'qiblah',component:QiblahComponent},
  {path:'books',component:BooksComponent},
  {path:'azkar',component:AzkarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
