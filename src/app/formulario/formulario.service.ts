import { Injectable } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor() { }

  verificaEmailInvalido(campo: string, formulario: FormGroup) {
    let campoEmail = formulario.get(campo);
    if( campoEmail.errors) {
      return this.verificaValidTouched(campo, formulario)
    }
  }

  aplicaCssErro(campo: string, formulario: FormGroup) {
    if (this.verificaValidTouched(campo, formulario)) { return 'has-error has-feedback'; }
  }

  verificaValidTouched(campo: string, formulario: FormGroup) {
    return !formulario.get(campo).valid && (formulario.get(campo).touched || formulario.get(campo).dirty);
  }

  verificaValidacoesFormulario(formulario: FormGroup) {
    Object.keys(formulario.controls).map((item) => {
      let controle = formulario.get(item);
      controle.markAsDirty();
      if(controle instanceof FormGroup) {
        this.verificaValidacoesFormulario(controle);
      }
    })
  }

}
