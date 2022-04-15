import { Component, OnInit,AfterViewInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";



@Component({
  selector: 'app-prayer-times',
  templateUrl: './prayer-times.component.html',
  styleUrls: ['./prayer-times.component.css']
})
export class PrayerTimesComponent implements OnInit,AfterViewInit {
  type!:string;
  imsak!:string;
  sunrise!:string;
  fajr!:string;
  dhur!:string;
  asr!:string;
  sunset!:string;
  maghrib!:string;
  isha!:string;
  date!:Date;

  midnight!:string;
  public data!:any[];
  public ipAddress!:string;
  city!:string;

  constructor(private route: ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {

    this.getIPAddress();

    this.fillData();

    this.route.paramMap.subscribe(res => {
      this.type = res.get('type') ?? "empty";



      let url="";
      if(this.type!="empty"){
         url ='https://api.pray.zone/v2/times/today.json?city=';
      }
      if(this.type=="today"){
         url ='https://api.pray.zone/v2/times/today.json?city';
      }
      if(this.type=="tomorrow"){
        url ='https://api.pray.zone/v2/times/tomorrow.json?city';
     }
     if(this.type=="day"){
      url ='https://api.pray.zone/v2/times/day.json?city';
   }



  });



}
fillData(time:string="today",city:string="tunis"){

  fetch('https://api.pray.zone/v2/times/'+time+'.json?city='+city)
	.then(response => response.json())
	.then(res => {this.data=res.results.datetime;
    console.log(res);





  })
	.catch(err => console.error(err));



}

fillDataWeek(){

  fetch('https://api.pray.zone/v2/times/this_week.json?city=tunis')
	.then(response => response.json())
	.then(res => {this.data=res.results.datetime;
    this.data[0]=res.results.datetime[6];
    console.log(res);
  })
	.catch(err => console.error(err));
}










fillDataTomorrow(){

  fetch('https://api.pray.zone/v2/times/tomorrow.json?city=tunis')
	.then(response => response.json())
	.then(res => {this.data=res.results.datetime;
    console.log(res);





  })
	.catch(err => console.error(err));



}
fillDate(){

  fetch('https://api.pray.zone/v2/times/day.json?city=tunis&date='+this.date)
	.then(response => response.json())
	.then(res => {this.data=res.results.datetime;
    console.log(res);





  })
	.catch(err => console.error(err));



}

getIPAddress()
  {
    this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
      this.ipAddress =JSON.stringify( res.ip);
    });
  }
  ngAfterViewInit():void{

  console.log("ip  2 : "+this.ipAddress);
  console.log("data 2: "+this.data);
  }
  logData(){
    console.log("ipAdress log : "+this.ipAddress);
    console.log("data log : "+this.data[0].times.Imsak);
  }


}


