### Curso de Desenvolvimento Web com ES6, Typescript e Angular

#### Aula 53

##### Property Binding vs String Interpolation

```html
    <!-- Forma normal -->
    <img src="/assets/coracao_vazio.png">


    <!-- property bind -->
    <img [src]="coracaoVazio" >
    <img [src]="coracaoCheio" >
    <img [src]="coracaoVazio" >

    <!-- Outros Exemplos: -->
    <a [href]="url_link"> Link </a> 
    <button [disabled]="desabilitado"> Link </a> 


    <!-- Não misturar métodos: -->
    errado:  <img [src]="{{url_img}}">
    certo:   <img [src]="url_img">
    certo:   <img src="{{url_img}}"
    
```

#### Aula 54 
MOCK (Objetos Simulados) = Simula comportamentos de objetos reais de forma simulada

> Segundo o Styleguide do Angular .model deve ser usado quando não é um componente


#### Aula 58
##### Event Biding
Eventos disparados no template  executam métodos de classes de componentes
componentes serão capazes de reagir conforme comandos são disparados pelo usuário
```html
     <textarea class="form-control" rows="3" (input)="atualizaResposta($event)"> </textarea>
     <button type="button" class="btn btn-primary" (click)="funcao()"> Clique aqui </button>
     <input type="text" (focus)= "funcao()">
     <input type="text" (keyup)= "funcao()">
     <input type="text" (input)= "funcao($event)">

```