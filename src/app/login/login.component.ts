import { Component, OnInit } from '@angular/core';
/* libreria que pide el ejercicio, pero muy mal explicado esta no se si se usara */
import { FormControl } from '@angular/forms';
/* librerias de formularios */
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  /* inyectamos el formBuilder en el constructor */
  constructor(private formBulider: FormBuilder) {
    /* creamos grupo de controles para el formulario de login */
    this.form = this.formBulider.group({
      password: ["", []],
      mail: ["",[]]
    })

  }
  ngOnInit() {

  }

  onSubmit() {
    // Aqua puedo agregar el código para manejar el envío del formulario
    console.log(this.form.value);
  }
}
