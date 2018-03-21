import { Component, OnInit } from '@angular/core';
import {CrudService} from '../services/crud.service';
import {FrontpageComponent} from '../frontpage/frontpage.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public category: any = {};

  constructor(private crud: CrudService) { }

  ngOnInit() {
    this.category = this.crud.data.data;
  }


}
