import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ValidatteMessageComponent } from './components/validatte-message/validatte-message.component';
import { NgxWrapperTinySliderModule } from 'ngx-wrapper-tiny-slider';

@NgModule({
  declarations: [AppComponent, ValidatteMessageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxWrapperTinySliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
