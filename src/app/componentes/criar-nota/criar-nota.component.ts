import { Component } from '@angular/core';
import { Nota } from '../nota';
import { NotaService } from 'src/app/componente/nota.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-nota',
  templateUrl: './criar-nota.component.html',
  styleUrls: ['./criar-nota.component.css']
})

export class CriarNotaComponent {
  constructor(private service: NotaService,
    private router: Router

    ){}

    nota: Nota= {
      titulo: '',
      conteudo: '',
      tipo: 'tipo1'
    }
    criarNota(){
      this.service.criar(this.nota).subscribe(() => {
      this.router.navigate(['/home'])
      })
    }

}


