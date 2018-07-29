import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormularioModule } from './formulario/formulario.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormularioModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
