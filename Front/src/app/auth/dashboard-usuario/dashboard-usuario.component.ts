import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { EstadisUsuariosService } from 'src/app/servicios/estadis-usuarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-usuario',
  templateUrl: './dashboard-usuario.component.html',
  styleUrls: ['./dashboard-usuario.component.css']
})
export class DashboardUsuarioComponent implements OnInit {
  notas_glucemia: any;
  servicios: any;
  formNotasPOST: FormGroup | any;

  // Variables para el carrito
  Snombre: string = '';
  Smonto: string = '';
  nuevoPedido: any[] = [];

  constructor(
    private paciente: EstadisUsuariosService,
    private usuario: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formNotasPOST = this.formBuilder.group({
      fecha_registro: ['', Validators.required],
      valor_glucemia: ['', Validators.required],
      comentario_registro: ['', Validators.required],
    });

    this.paciente.muestraNotasUsuario().subscribe({
      next: (notas_S) => {
        this.notas_glucemia = notas_S;
      },
      error: (errorData) => {
        console.error(errorData);
      }
    });

    this.paciente.muestraServicioAUsuario().subscribe({
      next: (servicios_S) => {
        this.servicios = servicios_S;
      },
      error: (errorData) => {
        console.error(errorData);
      }
    });
  }

  agregarNota(): void {
    if (this.formNotasPOST.valid) {
      this.paciente
        .nuevaNota('http://localhost:8000/api/paciente/registros_glucemia/', {
          fecha_registro: this.formNotasPOST.value.fecha_registro,
          valor_glucemia: this.formNotasPOST.value.valor_glucemia,
          comentario_registro: this.formNotasPOST.value.comentario_registro,
        })
        .subscribe((respuesta: any) => {
          alert('Nota registrada');
        });
    } else {
      alert('Ingrese los datos correctamente');
      this.formNotasPOST.markAllAsTouched();
    }
  }


  ///////// CARRITO
  agregarNombre(value: string): void {
    this.Snombre = value;
  }

  agregarMonto(value2: string): void {
    this.Smonto = value2;
  }

  agregarAlCarrito(): void {
    const nuevoItem = [this.Snombre, this.Smonto];

    if (!this.nuevoPedido) {
      this.nuevoPedido = [];
    }

    this.nuevoPedido.push(nuevoItem);

    this.Snombre = '';
    this.Smonto = '';
  }

  eliminarDelCarrito(index: number): void {
    if (index >= 0 && index < this.nuevoPedido.length) {
      this.nuevoPedido.splice(index, 1);
    }
  }
  calcularMontoTotal(): number {
    let total = 0;

    for (const item of this.nuevoPedido) {
      total += parseFloat(item[1]);
    }

    return total;
  }
  comprar() {
    this.router.navigateByUrl('/formulario-pago');
  }
}
