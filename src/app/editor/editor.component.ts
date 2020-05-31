import { Component, OnInit, Input } from '@angular/core';

import { CommonService } from '../services/common.service';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  @Input() data: any = {
    id: 1,
    title: '',
    description: ''
  };

  constructor(
    private commonService: CommonService
  ) {

  }

  ngOnInit() {
  }

}