### Curso de Desenvolvimento Web com ES6, Typescript e Angular

 ###### Gamificação de plataforma de aprendizagem da lingua inglesa. Usa conceitos básicos do Angular, exemplos:
 
 <br>


 - String Interpolation:
 ```html
    <h6>{{instrucao}}</h6>
    <p>{{rodadaFrase.fraseEng}}</p>
    
    <div class="progress-bar w-{{progresso}}"></div>
```
  
 - Property Binding:
```html
  <app-progresso [progresso]="progresso"></app-progresso>
  <app-tentativas [tentativas] = "tentativas"></app-tentativas>

```
 - Event Binding:
```html
     <textarea class="form-control" rows="3" (input)="atualizaResposta($event)"> </textarea>
     <button type="button" class="btn btn-primary" (click)="funcao()"> Clique aqui </button>
     <input type="text" (focus)= "funcao()">
     <input type="text" (keyup)= "funcao()">
     <input type="text" (input)= "funcao($event)">
     <button class="btn btn-primary" (click)="reiniciarJogo()"> Jogar novamente</button>

```
- NgFor:
```html
    <img *ngFor="let coracao of coracoes" [src]="coracao.exibeCoracao()"/>
```

- NgIf/Else:
```html
    <div *ngIf="tipoEncerramento == 'derrota'; else fimDeJogoVitoria" class="container" style="margin-top:50px ;">

    <ng-template #fimDeJogoVitoria>
```

- Input:
```ts
    @Input() public progresso: number = 0;
```

- Output/Event Emitter:
```ts
    @Output() public encerrarJogo: EventEmitter<string> =  new EventEmitter();
```

