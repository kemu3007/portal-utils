import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UrlSerializer } from '@angular/router';
import { TrailingSlashUrlSerializer } from './url-serializer';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, NgbModule, BrowserAnimationsModule],
  providers: [{ provide: UrlSerializer, useClass: TrailingSlashUrlSerializer }],
  bootstrap: [AppComponent],
})
export class AppModule {}
