import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @Input() tab: number;

  constructor(
  ) { }

  ngOnInit() {
    console.log(`>>> TestComponent ${this.tab} initialized`);
    this.toggleActiveTabClass()
  }

  toggleActiveTabClass() {
    if ( document.getElementsByClassName('tabs__title--active')[0] ) {
      document.getElementsByClassName('tabs__title--active')[0].classList.remove('tabs__title--active');
    }
    const tabNode = document.getElementsByTagName('tab');
    tabNode[this.tab - 1].classList.add('tabs__title--active');
  }
}
