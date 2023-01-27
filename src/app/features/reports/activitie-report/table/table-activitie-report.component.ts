import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  position: number;
  dataInicio: string;
  dia: string;
  apontamento: string;
  horas: string;
  diario: string;
  saldo: string;
  extras: string;
  justificativa: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    dataInicio: '02/07/2022',
    dia: 'Sex',
    apontamento: '[08:00:25] - [12:24:03] / [13:24:20] - {16:24:55}',
    horas: '07:24',
    diario: '-00:36',
    saldo: '-00:36',
    extras: '00:00',
    justificativa:
      '[E] Taxa do lixo - Análise da package enviada pelo Batata: crd_accordi_fattura_saldo_pck [S] Saída almoço',
  },
  {
    position: 2,
    dataInicio: '22/09/2022',
    dia: 'Ter',
    apontamento: '[08:00:25] - [12:24:03] / [13:24:20] - {16:24:55}',
    horas: '07:24',
    diario: '00:36',
    saldo: '00:36',
    extras: '02:00',
    justificativa:
      '[E] Justificativa: imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  },
  {
    position: 3,
    dataInicio: '31/10/2022',
    dia: 'Ter',
    apontamento: '[08:00:25] - [12:24:03] / [13:24:20] - {16:24:55}',
    horas: '05:45',
    diario: '05:36',
    saldo: '05:36',
    extras: '02:00',
    justificativa:
      '[G] by accident, sometimes on purpose (injected humour and the like)',
  },
];

@Component({
  selector: 'app-table-activitie-report',
  templateUrl: './table-activitie-report.component.html',
  styleUrls: ['./table-activitie-report.component.scss'],
})
export class TableActivitieReportComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'dataInicio',
    'dia',
    'apontamento',
    'horas',
    'diario',
    'saldo',
    'extras',
    'justificativa',
  ];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit(): void {}
}
