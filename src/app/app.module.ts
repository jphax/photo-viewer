import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';
import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
      AppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
