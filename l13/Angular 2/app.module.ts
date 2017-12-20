import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { DormList } from './dorm.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, DormList ],
  bootstrap:    [ AppComponent, DormList ]
})
export class AppModule { }
