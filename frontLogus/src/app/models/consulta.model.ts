export interface Consulta {
  id?: number;
  nomePaciente: string;
  crmMedico: string;
  nomeMedico: string;
  dataHora: string; // ISO string format
  nroConsultorio: number;
}
