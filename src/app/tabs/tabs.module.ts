import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab/tab.component';
import { TabTitleComponent } from './tab-title/tab-title.component';
import { TabContentComponent } from './tab-content/tab-content.component';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    TabsComponent,
    TabComponent,
    TabTitleComponent,
    TabContentComponent,
    TestComponent
  ],
  exports: [
    TabsComponent,
    TabComponent,
    TabTitleComponent,
    TabContentComponent,
    TestComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class TabsModule { }
