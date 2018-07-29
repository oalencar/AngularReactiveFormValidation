import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormularioService} from '../formulario.service';



@Component({
  selector: 'app-input-validacao',
  templateUrl: './input-validacao.component.html',
  styleUrls: ['./input-validacao.component.css']
})
export class InputValidacaoComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private formularioService: FormularioService
  ) { }

  ngOnInit() {
    this.inicializarForm();
  }

  inicializarForm() {
    this.formulario = this.formBuilder.group({
      campo01: [null, [Validators.required]],
      campo02: [null, [Validators.email]]
    });
  }

  submitFormulario() {

    if (!this.formulario.valid) {
      this.formularioService.verificaValidacoesFormulario(this.formulario);
      return;
    }

    this.formPost();
    console.log(this.formulario)

  }

  resetForm() {
    this.formulario.reset();
  }

  formPost() {
    this.http.post('https://httpbin.org/post',
      JSON.stringify(this.formulario.value)
    ).subscribe(res =>  {
        console.log(res);
        //this.resetForm();
      },
      (error: any) => console.log(error));
  }



}
