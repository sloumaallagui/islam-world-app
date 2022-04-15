import { Injectable, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpServiceService  implements OnInit{
  data:any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getIp();
  }
  getIp():string{
    const url ='http://api.ipify.org/?format=json'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log("data"+this.data.ip);
      return this.data.ip;
    })
    console.log(this.data.ip)
    return this.data.ip;
  }
}
