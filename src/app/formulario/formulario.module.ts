import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputValidacaoComponent } from './input-validacao/input-validacao.component';
import { HttpClientModule } from '@angular/common/http';
import {CampoControlErroComponent} from './campo-control-erro/campo-control-erro.component';
import {FormularioService} from './formulario.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    InputValidacaoComponent,
    CampoControlErroComponent
  ],
  exports: [
    InputValidacaoComponent,
    CampoControlErroComponent
  ],
  providers: [
    FormularioService
  ]
})
export class FormularioModule { }
