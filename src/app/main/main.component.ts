import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  title = 'desafio3';
  presente:boolean=false;
  ver:any=false;
  ver2:any=false;
  texto:number=0;
  texto2:number=0;
  text:number=0;
  contenido = [
    { 
      id:1,
      nombre: 'Sacacorchos con Inyección de Aire',
      precio: '12 ',
      tipoEnvio: 'Envio gratis',
      imagenUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_780497-MLV71098301019_082023-T.webp',
    },
    { 
      id:2,
      nombre: 'Grifería Grupo Fregadero Lavaplatos Bm',
      precio: '57',
      tipoEnvio: 'Envio gratis',
      imagenUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_766968-MLV44922379408_022021-T.webp',
    },
    
    { 
      id:3,
      nombre: 'Juego de 3 Sartenes Antiaherentes ',
      precio: '35',
      tipoEnvio: 'Envio gratis',
      imagenUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_670842-MLV43872014998_102020-T.webp',
    }, 
    // **
    { 
      id:4,
      nombre: 'Reloj tactico Militar',
      precio: '102',
      tipoEnvio: 'Envio gratis',
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_774649-MLV49654430293_042022-W.webp',
    },
    
    { 
      id:5,
      nombre: 'Impresora Epson Tinta Continua Ecotank L3250',
      precio: '288',
      tipoEnvio: 'Envio gratis',
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_784651-MLV31913850507_082019-W.webp',
    },
    { 
      id:6,
      nombre: 'Caucho Michelin 265/65r17 X Lt A/s',
      precio: '286',
      tipoEnvio: 'Envio gratis',
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_928566-MLV43196436606_082020-F.webp',
    },
    { 
      id:7,
      nombre: 'Detector de Metal Portátil - Batería 9v',
      precio: '44',
      tipoEnvio: 'Envio gratis',
      imagenUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_963865-MLV31247546005_062019-T.webp',
    },
    { 
      id:8,
      nombre: 'Gimnasio de Oso Bebe-Spark baby',
      precio: '39',
      tipoEnvio: 'Envio gratis',
      imagenUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_842916-MLV71453612450_092023-T.webp',
    },
    { 
      id:9, 
      nombre: 'Vaso Smart  Temperature Control Travel Mug 2  ',
      precio: '308',
      tipoEnvio: 'Envio gratis',
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_709191-MLV69985522207_062023-O.webp',
    },
    { 
      id:10,
      nombre: 'Vsitoo Temperatura Control De Café Calentado Mug Ly2xd ',
      precio: '220',
      tipoEnvio: 'Envio gratis',
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_813272-MLV72338791071_102023-O.webp',
    }
  ]
  
  lok(cont:any) {
    if(this.ver == false) {
      this.ver = cont;
      
      console.log("hola")
      
    } else {
      this.ver = false;
    }
  }
  lok2(cont2:any) {
    if(this.ver2 == false) {
      this.ver2 = cont2;
     
      console.log("hola")
      
    } else {
      this.ver2 = false;
    }
  }
}


