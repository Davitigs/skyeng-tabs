import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TabsService} from './tabs/tabs.service';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{

  public tabTags = document.getElementsByTagName('tab-content');
  public tabs: number[];
  public activeTab$: Observable<number>;

  constructor(
    private tabsService: TabsService
  ) {
  }

  ngOnInit() {
    this.tabsService.tabsState$
      .pipe(
        map(tabs => this.tabs = tabs)
      )
      .subscribe();
    this.activeTab$ = this.tabsService.activeTab$;
  }

  ngAfterViewInit() {
    // this.activeTab$
    //   .pipe(
    //     tap(() => this.tabTags[1].closest('tab').classList.add('tabs__title--active'))
    //   )
    //   .subscribe();
  }

  public dec() {
    this.tabsService.dec();
  }

  public inc() {
    this.tabsService.inc();
  }
}
