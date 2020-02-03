
import {Injectable}from'@angular/core';

@Injectable()
export class HeroesService{
    private heroes:Heroe[]=[
        {
          nombre: "CHILLI CON CARNE",
          bio: "ESTA HECHO CON FRIJOL CARNE CON TOCINO NACHOS Y QUESO Y GUACAMOLE",
          img: "assets/img/meal1.jpg",
          aparicion: "1941-11-01",
          casa:"DC"
        },
        {
          nombre: "ENCHILADAS",
          bio: "TORTILLAS CON QUESO Y ESPECIAS",
          img: "assets/img/meal2.jpg",
          aparicion: "1939-05-01",
          casa:"DC"
        },
        {
          nombre: "NACHOS CON QUESO",
          bio: "NACHOS CON QUESO PICCANTE",
          img: "assets/img/meal3.jpg",
          aparicion: "1964-01-01",
          casa: "Marvel"
        },
        {
          nombre: "TACOS",
          bio: "TORTILLAS CON CARNE DE RES POLLO Y CERDO O VEGERTARIANAS",
          img: "assets/img/meal4.png",
          aparicion: "1962-05-01",
          casa:"Marvel"
        },
        {
          nombre: "TACOS",
          bio: "TORTILLAS CON CARNE DE RES POLLO Y CERDO O VEGERTARIANAS",
          img: "assets/img/meal4.jpg",
          aparicion: "1940-06-01",
          casa: "DC"
        },
        {
          nombre: "FRIJOLES",
          bio: "FRIJOLES PICANTES CON SALSA DE COCO",
          img: "assets/img/frijoles.jpg",
          aparicion: "1962-08-01",
          casa: "Marvel"
        },
        {
          nombre: "TAMALES",
          bio: "MAIZ MOLIDO CON QUESO Y PEDAZOS DE CARNE",
          img: "assets/img/tamales.jpg",
          aparicion: "1974-11-01",
          casa: "Marvel"
        }
      ];
    
    
    constructor(){
        console.log("LO MEJOR DE MEXICO");
    }

    getHeroes():Heroe[]{
        return this.heroes;
    }
    getHeroe(idx:string){
      return this.heroes[idx];
    }


    buscarHeroes(termino:string){
      let heroesArr:Heroe[]=[];
      termino=termino.toLowerCase();

      for(let heroe of this.heroes){
        let nombre = heroe.nombre.toLowerCase();
        if(nombre.indexOf(termino)>=0 ){
          heroesArr.push(heroe)
        }
      }
      return heroesArr;
    }
}

export interface Heroe{
    nombre:string;
    bio:string;
    img:string;
    aparicion:string;
    casa:string;
};