import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';



@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.scss']
})
export class DescripcionComponent implements OnInit {
 id:any;
 i:any=0;
 
  constructor (
    // private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
     this.getCont();
     console.log(this.id);
  }
  getCont():void  {
    console.log(this.route.snapshot.params["id"]);
    this.id =this.route.snapshot.params["id"];
    if (this.id>=1 ) {
      this.i=this.id-1
    } else {
      this.i=0
    }
  
  }
  
  
  contenido2 = [
    { 
      id:0,
      nombre: 'Sacacorchos con Inyección de Aire',
      precio: '12 ',
      tipoEnvio: 'Envio gratis',
      imagenUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_780497-MLV71098301019_082023-T.webp',
      Categoria: 'Electrodomesticos',
      vendidos: '265',
      opiniones: '114',
      cantidad: '11'
    },
    { 
      id:1,
      nombre: 'Grifería Grupo Fregadero Lavaplatos Bm',
      precio: '57',
      tipoEnvio: 'Envio gratis',
      imagenUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_766968-MLV44922379408_022021-T.webp',
      Categoria: 'Cocina',
      vendidos: '86',
      opiniones: '11',
      cantidad: '45'
    },
    
    { 
      id:2,
      nombre: 'Juego de 3 Sartenes Antiaherentes ',
      precio: '35',
      tipoEnvio: 'Envio gratis',
      imagenUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_670842-MLV43872014998_102020-T.webp',
      Categoria: 'Cocina',
      vendidos: '3',
      opiniones: '2',
      cantidad: '48'
    }, 
    // **
    { 
      id:3,
      nombre: 'Reloj tactico Militar',
      precio: '102',
      tipoEnvio: 'Envio gratis',
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_774649-MLV49654430293_042022-W.webp',
      Categoria: 'Relojes',
      vendidos: '12',
      opiniones: '14',
      cantidad: '10'
    },
    
    { 
      id:4,
      nombre: 'Impresora Epson Tinta Continua Ecotank L3250',
      precio: '288',
      tipoEnvio: 'Envio gratis',
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_784651-MLV31913850507_082019-W.webp',
      Categoria: 'Computación',
      vendidos: '60',
      opiniones: '42',
      cantidad: '8'
    },
    { 
      id:5,
      nombre: 'Caucho Michelin 265/65r17 X Lt A/s',
      precio: '286',
      tipoEnvio: 'Envio gratis',
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_928566-MLV43196436606_082020-F.webp',
      Categoria: 'Accesorios de Vehiculos',
      vendidos: '2',
      opiniones: '0',
      cantidad: '11'
    },
    { 
      id:6,
      nombre: 'Detector de Metal Portátil - Batería 9v',
      precio: '44',
      tipoEnvio: 'Envio gratis',
      imagenUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_963865-MLV31247546005_062019-T.webp',
      Categoria: 'Accesorios de Seguridad',
      vendidos: '30',
      opiniones: '16',
      cantidad: '47'
    },
    { 
      id:7,
      nombre: 'Gimnasio de Oso Bebe-Spark baby',
      precio: '39',
      tipoEnvio: 'Envio gratis',
      imagenUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_842916-MLV71453612450_092023-T.webp',
      Categoria: 'Accesorios de Bebe',
      vendidos: '100',
      opiniones: '78',
      cantidad: '8'
    },
    { 
      id:8, 
      nombre: 'Vaso Smart  Temperature Control Travel Mug 2  ',
      precio: '308',
      tipoEnvio: 'Envio gratis',
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_709191-MLV69985522207_062023-O.webp',
      Categoria: 'Lenceria',
      vendidos: '40',
      opiniones: '34',
      cantidad: '6'
    },
    { 
      id:9,
      nombre: 'Vsitoo Temperatura Control De Café Calentado Mug Ly2xd ',
      precio: '220',
      tipoEnvio: 'Envio gratis',
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_813272-MLV72338791071_102023-O.webp',
      Categoria: 'Lenceria',
      vendidos: '20',
      opiniones: '19',
      cantidad: '10'
    }
  ]
 }
