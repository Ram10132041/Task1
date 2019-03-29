import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  constructor(public dataSer : DataServiceService) { }
  @Input() selectedLevel : any;

  myDatas : any[] = [];

  getData;

  myDatas1;

  

  ngOnInit() {
    this.dataSer.getData().subscribe(data => {
      this.myDatas1 = data[this.selectedLevel];
      console.log(this.myDatas1);
      this.myDatas.push({Name:this.myDatas1.name, Capital:this.myDatas1.capital, Population:this.myDatas1.population});
      console.log(this.myDatas);

    });
  }
  ngOnLoad(){
    this.dataSer.getData().subscribe(data => {
      this.myDatas1 = data[this.selectedLevel];
      console.log(this.myDatas1);
      this.myDatas.push({Name:this.myDatas1.name, Capital:this.myDatas1.capital, Population:this.myDatas1.population});
      console.log(this.myDatas);

    });
  }  

}
