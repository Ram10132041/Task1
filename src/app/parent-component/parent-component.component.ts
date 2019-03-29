import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  myValue : any[] = [];

  myData : any[] = [];

  countryName : string = "";

  selectedLevel;

  myParentData;



  constructor(private dataSer : DataServiceService) { }

  showData(){
    console.log(this.countryName);
    this.dataSer.getData().subscribe(data => {
      console.log(data);
    });
    console.log(this.myData);
  }
  
  getmyData(){
    this.dataSer.getData().subscribe(data => {
      this.myParentData = data[this.selectedLevel];
      console.log(this.myParentData);
      this.myValue.push({Name:this.myParentData.name, Capital:this.myParentData.capital, Population:this.myParentData.population});
      console.log(this.myValue);
    });
  }

  ngOnInit() {
    
  }

}
