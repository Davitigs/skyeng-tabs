import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  constructor() {
  }

  private tabs = [ 1, 2 ];
  private tabsState: BehaviorSubject<number[]> = new BehaviorSubject([...this.tabs]);
  private activeTab: BehaviorSubject<number> = new BehaviorSubject(1);

  public tabsState$ = this.tabsState.asObservable();
  public activeTab$ = this.activeTab.asObservable();

  getActiveTabValue() {
    return this.activeTab.getValue();
  }

  public dec() {
    this.tabs = this.tabs.slice(0, -1);
    this.tabsState.next(this.tabs);
    if ( this.tabs.length < this.getActiveTabValue() ) {
      this.activeTab.next(1);
    }
  }

  public inc() {
    this.tabs = [ ...this.tabs, (this.tabs.length + 1) ];
    this.tabsState.next(this.tabs);
    this.activeTab.next(this.tabs[this.tabs.length - 1]);
  }

}
