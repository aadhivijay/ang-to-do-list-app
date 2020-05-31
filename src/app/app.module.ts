import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HomeComponent, ListComponent, EditorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
