import { Component, OnInit } from '@angular/core';

import { CommonService } from '../services/common.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public item: any;
  public showEditor: boolean;

  constructor(
    private commonService: CommonService
  ) {

  }

  ngOnInit() {
    this.listenList();
  }

  public listenList() {
    this.commonService.item.subscribe((data: any) => {
      if (data) {
        console.log('listenList : ', data);
        this.openEditor(data);
      }
    });
  }

  public addItem() {
    this.openEditor({
      id: Math.floor(Math.random() * 100000),
      title: '',
      description: ''
    });
  }

  private openEditor(data: any) {
    this.item = data;
    this.showEditor = true;
  }

  public closeEditor() {
    this.showEditor = false;
    console.log(this.item);
    this.setData(this.item);
  }

  private setData(data: any) {
    let list = this.commonService.getList();
    if (list && list.length) {
      const index = list.findIndex((value: any) => {
        return value.id === data.id;
      });
      if (index > -1) {
        list[index] = data;
      } else {
        list.push(data);
      }
    } else {
      list = [];
      list.push(data);
    }

    this.commonService.setList(list);
  }

}