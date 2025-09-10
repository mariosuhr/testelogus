import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConsultaListComponent } from './components/consulta-list/consulta-list.component';
import { ConsultaFormComponent } from './components/consulta-form/consulta-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConsultaListComponent, ConsultaFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Medlogus';
  
  @ViewChild('consultaList') consultaList!: ConsultaListComponent;

  onConsultaCadastrada() {
    // Recarregar a lista de consultas quando uma nova for cadastrada
    this.consultaList.carregarConsultas();
  }
}
