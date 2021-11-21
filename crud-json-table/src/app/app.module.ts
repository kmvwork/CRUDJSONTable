import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { LoadDataPageComponent } from './components/load-data-page/load-data-page.component';
import { TableDataPageComponent } from './components/table-data-page/table-data-page.component';
import { EditDataPageComponent } from './components/edit-data-page/edit-data-page.component';
import { MainLayoutPageComponent } from './components/main-layout-page/main-layout-page.component';
import { UnloadDataPageComponent } from './components/unload-data-page/unload-data-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutPageComponent,
    WelcomePageComponent,
    LoadDataPageComponent,
    TableDataPageComponent,
    EditDataPageComponent,
    UnloadDataPageComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
