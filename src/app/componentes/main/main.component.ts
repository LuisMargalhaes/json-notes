import { Component } from '@angular/core';
import { Nota } from '../nota';
import { NotaService } from 'src/app/componente/nota.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
constructor(private service: NotaService) {}
listarnotas:Nota[]= [];
ngOnInit(): void{
  this.service.listar().subscribe((listaNotas) => {
    this.listaNotas = listaNotas
  })

}
  listaNotas: Nota[]= [
    {
      titulo: "BBBBB",
      conteudo: "DEU CERTO!",
      tipo: "tipo2"
    },
    {
      titulo: "CCCCC",
      conteudo: "DEU ERRADO!",
      tipo: "tipo3"
    }
  ];

}
