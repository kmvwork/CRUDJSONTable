import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { LoadDataPageComponent } from './components/load-data-page/load-data-page.component';
import { TableDataPageComponent } from './components/table-data-page/table-data-page.component';
import { EditDataPageComponent } from './components/edit-data-page/edit-data-page.component';
import { UploadingDataPageComponent } from './components/uploading-data-page/uploading-data-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LoadDataPageComponent,
    TableDataPageComponent,
    EditDataPageComponent,
    UploadingDataPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
