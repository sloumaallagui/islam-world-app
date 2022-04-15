import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CookieService} from 'ngx-cookie-service';


import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewsSectionComponent } from './news-section/news-section.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PrayerTimesComponent } from './prayer-times/prayer-times.component';
import { HttpClientModule } from '@angular/common/http';
import { QiblahComponent } from './qiblah/qiblah.component';
import { BooksComponent } from './books/books.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AzkarComponent } from './azkar/azkar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MainComponent,
    FooterComponent,
    BodyComponent,
    NewsSectionComponent,
    AboutComponent,
    SidebarComponent,
    PrayerTimesComponent,
    QiblahComponent,
    BooksComponent,
    AzkarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
     PdfViewerModule
  ],
  providers: [CookieService,{ provide: Window, useValue: window }],
  bootstrap: [BodyComponent]
})
export class AppModule { }
