import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConsultaService } from '../../services/consulta.service';
import { Consulta } from '../../models/consulta.model';
import { SnackbarService } from '../../services/snackbar.service';
import { timeout, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-consulta-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './consulta-list.component.html',
  styleUrl: './consulta-list.component.css'
})
export class ConsultaListComponent implements OnInit {
  consultas: Consulta[] = [];
  consultasFiltradas: Consulta[] = [];
  filtroData: string = '';
  isLoading = false;
  errorMessage = '';

  constructor(
    private consultaService: ConsultaService,
    private cdr: ChangeDetectorRef,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit() {
    // Carregar consultas da API
    this.carregarConsultas();
  }

  carregarConsultas() {
    this.carregarConsultasComFiltro();
  }


  carregarConsultasComFiltro() {
    this.isLoading = true;
    this.errorMessage = '';

    // Usar a API para filtrar por data se houver filtro
    const dataFiltro = this.filtroData ? this.filtroData : undefined;
    
    this.consultaService.listarConsultas(dataFiltro)
      .pipe(
        timeout(10000), // 10 segundos de timeout
        catchError(error => {
          this.errorMessage = `Erro ao carregar consultas: ${error.message || 'API não disponível'}`;
          return of([]); // Retorna array vazio em caso de erro
        })
      )
      .subscribe({
        next: (consultas) => {
          this.consultas = consultas || [];
          this.consultasFiltradas = [...this.consultas];
          this.isLoading = false;
          this.errorMessage = '';
          
          // Forçar detecção de mudanças de forma assíncrona
          setTimeout(() => {
            this.cdr.detectChanges();
          }, 0);
        },
        error: (error) => {
          this.errorMessage = `Erro ao carregar consultas: ${error.message || 'Erro desconhecido'}`;
          this.consultas = [];
          this.consultasFiltradas = [];
          this.isLoading = false;
          
          // Mostrar erro no snackbar
          this.snackbarService.showError('Erro ao carregar consultas. Tente novamente.');
          
          // Forçar detecção de mudanças de forma assíncrona
          setTimeout(() => {
            this.cdr.detectChanges();
          }, 0);
        }
      });
  }

 

  aplicarFiltro() {
    // Aplicar filtro local adicional se necessário
    this.consultasFiltradas = [...this.consultas];
    setTimeout(() => {
      this.cdr.detectChanges();
    }, 0);
  }

  onFiltroChange() {
    this.carregarConsultasComFiltro();
  }

  limparFiltro() {
    this.filtroData = '';
    this.carregarConsultasComFiltro();
  }

  formatarDataHora(dataHora: string): string {
    const data = new Date(dataHora);
    return data.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  formatarData(dataHora: string): string {
    const data = new Date(dataHora);
    return data.toLocaleDateString('pt-BR');
  }

  formatarHora(dataHora: string): string {
    const data = new Date(dataHora);
    return data.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  // Método para formatar a data do filtro (string YYYY-MM-DD)
  formatarDataFiltro(dataString: string): string {
    const data = new Date(dataString + 'T00:00:00');
    return data.toLocaleDateString('pt-BR');
  }


}
