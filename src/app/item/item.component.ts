import { Component, OnInit } from '@angular/core';
import {CrudService} from '../services/crud.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  public item: any = {};

  constructor(private crud: CrudService) { }

  ngOnInit() {
    this.item = this.crud.data.data;
  }

}
