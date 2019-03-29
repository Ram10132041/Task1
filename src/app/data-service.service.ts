import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  myValue : any[] = [{Name:"", Capital:"", Population:0}];
  getDatas : any[] = [{Name:"", Capital:"", Population:0}];

  myParentData;

  selectedLevel;
  

  constructor(private http : HttpClient) { }
  myUrl = "https://restcountries.eu/rest/v2/all";
  getData(){
    return this.http.get(this.myUrl)
  }

  shareData(){
      this.myValue.push({Name:this.myParentData.name,Capital:this.myParentData.capital, Population:this.myParentData.population})
  }
}
