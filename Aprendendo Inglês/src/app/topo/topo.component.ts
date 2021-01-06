import { Component } from '@angular/core'; // recurso de componente dentro de nodemodules

@Component({

    selector: 'app-topo',
    /*
    'app-topo' será referenciado como <app-topo></app-topo>
    '[app-topo] setá referenciado como <div app-topo></div>
    '.app-topo' será referenciado como <div class="app-topo"> </div>
    */
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.css']
    /*
    styles: [` 
    .exemplo { color:red  }        
    `],
    
    template: `
    <p> Componente Topo </p> `
    */
})
export class TopoComponent {
    public titulo: string = 'Aprendendo Inglês' //One Way databind

}