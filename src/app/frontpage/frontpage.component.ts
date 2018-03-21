import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CrudService} from '../services/crud.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  constructor(private crud: CrudService) { }

  public CModel: any = {};
  public UModel: any = {};
  public DModel: any = {};

  ngOnInit() {
  }

  loadCategory() {
    this.crud.load('/api/category', 'category');
  }

  createCategory() {
    this.crud.create('/api/category', this.CModel);
  }

  updateCategory() {
    this.crud.update('/api/category/' + this.UModel.id, this.UModel);
  }

  deleteCategory() {
    this.crud.delete('/api/category/' + this.DModel.id);
  }

  loadItem() {
    this.crud.load('/api/item', 'item');
  }

  createItem(){
    this.crud.create('/api/item', this.CModel);
  }

  updateItem(){
    this.crud.update('/api/item/' + this.UModel.id, this.UModel);
  }

  deleteItem() {
    this.crud.delete('/api/item/' + this.DModel.id);
  }
}
