import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnInit {

  @Input() tab: number
  constructor() { }

  ngOnInit() {
  }

}
