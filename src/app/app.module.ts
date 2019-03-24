import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material';
import { YoutubeEPipe } from './pipes/youtube-e.pipe';

import { HttpClientModule } from '@angular/common/http';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { OwlModule } from 'ngx-owl-carousel';

const appRoutes: Routes = [
  {path: '', loadChildren: () => HomeModule},
  {path: 'admin', loadChildren: () => AdminModule}
];
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatProgressBarModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    LoadingBarModule,
    OwlModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
