import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConsultaService } from '../../services/consulta.service';
import { Consulta } from '../../models/consulta.model';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-consulta-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './consulta-form.component.html',
  styleUrl: './consulta-form.component.css'
})
export class ConsultaFormComponent {
  @Output() consultaCadastrada = new EventEmitter<void>();

  consulta: Consulta = {
    nomePaciente: '',
    crmMedico: '',
    nomeMedico: '',
    dataHora: '',
    nroConsultorio: 0
  };

  isLoading = false;

  constructor(
    private consultaService: ConsultaService,
    private snackbarService: SnackbarService
  ) {}

  onSubmit() {
    if (this.isFormValid()) {
      this.isLoading = true;

      this.consultaService.agendarConsulta(this.consulta).subscribe({
        next: (response) => {
          this.isLoading = false;
          this.resetForm();
          // Notificar que uma consulta foi cadastrada
          this.consultaCadastrada.emit();
          // Mostrar snackbar de forma assíncrona
          setTimeout(() => {
            this.snackbarService.showSuccess('Consulta agendada com sucesso!');
          }, 0);
        },
        error: (error) => {
          this.isLoading = false;
          const errorMessage = this.getErrorMessage(error);
          // Mostrar snackbar de forma assíncrona
          setTimeout(() => {
            this.snackbarService.showError(errorMessage);
          }, 0);
        }
      });
    }
  }

  private isFormValid(): boolean {
    return !!(
      this.consulta.nomePaciente &&
      this.consulta.crmMedico &&
      this.consulta.nomeMedico &&
      this.consulta.dataHora &&
      this.consulta.nroConsultorio > 0
    );
  }

  private resetForm() {
    this.consulta = {
      nomePaciente: '',
      crmMedico: '',
      nomeMedico: '',
      dataHora: '',
      nroConsultorio: 0
    };
  }

  private getErrorMessage(error: any): string {
    if (error.status === 409) {
      return 'Já existe uma consulta agendada para este horário e consultório.';
    } else if (error.status === 400) {
      return 'Dados inválidos. Verifique as informações preenchidas.';
    } else if (error.status === 500) {
      return 'Erro interno do servidor. Tente novamente mais tarde.';
    } else if (error.error?.message) {
      return error.error.message;
    } else {
      return 'Erro ao agendar consulta. Tente novamente.';
    }
  }
}
