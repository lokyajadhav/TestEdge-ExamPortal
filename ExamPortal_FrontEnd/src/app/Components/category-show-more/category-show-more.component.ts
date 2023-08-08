import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-show-more',
  templateUrl: './category-show-more.component.html',
  styleUrls: ['./category-show-more.component.css']
})
export class CategoryShowMoreComponent implements OnInit {
  @Input() text!: string;
  @Input() words!: number;
  seeMore:boolean;
  constructor(){
    this.seeMore=false
  }
  ngOnInit(): void {
    
  }

}
