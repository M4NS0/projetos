import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {
  @Input() resultado: number;
  @Input() mensagem: string;
  @Input() redirecionamento: string;
  @Input() alerta: string;

  ngOnInit(): void {
    
  }

}