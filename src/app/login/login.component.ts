import { Component, OnInit } from '@angular/core';
/* libreria que pide el ejercicio, pero muy mal explicado esta no se si se usara */
import { FormControl } from '@angular/forms';
/* librerias de formularios */
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service'; /* mi servicio de prueba por ahora */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  /* inyectamos el formBuilder en el constructor */
  constructor(
    private authService: AuthService,
    private formBulider: FormBuilder
  ) {
    /* creamos grupo de controles para el formulario de login */
    this.form = this.formBulider.group({
      password: ['', []],
      mail: ['', []],
    });
  }
  ngOnInit() {}

  onSubmit(): void {
    const email = this.form.get('mail')?.value; /* capturo el mail del formulario */
    const password = this.form.get('password')?.value; /* capturo el password del formulario */
  
    this.authService.login(email, password)
    .then(success => {
      if (success) {
        window.location.reload();
      } else {
        console.log('Error de inicio de sesión');
      }
    });
}
}
