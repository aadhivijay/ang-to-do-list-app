import { Component, OnInit } from '@angular/core';

import { CommonService } from '../services/common.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public list: any[] = [];

  constructor(
    private commonService: CommonService
  ) {

  }

  ngOnInit() {
    this.populateList();
  }

  private populateList() {
    const list = this.commonService.getList();
    console.log('list : ', list);
    this.list = list;
  }

  public openEditor(item: any) {
    this.commonService.item.next(item);
  }

}