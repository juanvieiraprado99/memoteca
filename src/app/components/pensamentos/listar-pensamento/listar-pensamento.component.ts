import { Component } from '@angular/core';
import { Pensamento } from 'src/app/models/pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent {

  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService) {}

  ngOnInit() {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

}
