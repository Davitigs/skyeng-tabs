import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tab-title',
  templateUrl: './tab-title.component.html',
  styleUrls: ['./tab-title.component.scss']
})
export class TabTitleComponent implements OnInit {


  @Input() tab;
  constructor() { }

  ngOnInit() {
  }

}
