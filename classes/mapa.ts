import { Marcador } from './marcador';
export class Mapa {
    private marcadores: {[key:string]: Marcador} = {
       '1': {
            id: '1',
            nombre: 'Fernando',
            lng: -70.5621786 ,
            lat: -33.59317924,
            color: '#dd8fee'
          },
         '2': {
            id: '2',
            nombre: 'Amy',
            lng: -70.5682221 , 
            lat: -33.6018353,
            color: '#790af0'
          },
         '3': {
            id: '3',
            nombre: 'Orlando',
            lng: -70.5682221 , 
            lat: -33.6018353,
            color: '#19884b'
          }
    }
    constructor() {}

    getMarcadores() {
        return this.marcadores;
    }

    agregarMarcador( marcador: Marcador ) {
        this.marcadores[ marcador.id ] = marcador;
    }

    borrarMarcador( id: string ) {
        delete this.marcadores[id];
        return this.getMarcadores()
    }

    moverMarcador( marcador: Marcador ) {
       // console.log(marcador.id);
        this.marcadores[marcador.id].lng = marcador.lng;
        this.marcadores[marcador.id].lat = marcador.lat;
    }
}