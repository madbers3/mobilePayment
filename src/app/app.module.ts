import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routes.module';
import { MobileReplenishModule } from './mobile-replenish/mobile-replenish.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MobileReplenishModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
