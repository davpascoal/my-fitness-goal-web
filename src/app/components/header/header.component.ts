import { Component, OnInit } from '@angular/core';
import { views } from 'src/app/app-routing.module';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public headerListItems = views;

  constructor() { }

  ngOnInit(): void {
    console.log('headerListItems', this.headerListItems);
  }

}
