import { Component, Input } from "@angular/core";
import { Nota } from "../nota";

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent {
  @Input() nota:Nota = {
    id: 0,
    titulo: "AAAAAA",
    conteudo: "TESTE",
    tipo: "tipo1"
  }
}
