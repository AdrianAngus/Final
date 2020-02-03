"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var HeroesService = /** @class */ (function () {
    function HeroesService() {
        this.heroes = [
            {
                nombre: "DUREX",
                bio: "El condon que te proporciona mucha durabilidad y con toda la proteccion asegurada DUREX el mejor condon que podrias usar",
                img: "assets/img/durex.jpg",
                aparicion: "1941-11-01",
                casa: "DC"
            },
            {
                nombre: "GOLD",
                bio: "Gold el condon que te garantiza la mejor experiencia sexual mediante el deporte que mas te gusta no puedes quedarte con las ganas",
                img: "assets/img/gold.jpg",
                aparicion: "1939-05-01",
                casa: "DC"
            },
            {
                nombre: "KAMASUTRA",
                bio: "Que mejor que confiarle tu futuro a los mejores condones que te apuestan a disfrutar un sexo seguro y libre de contagios que no quisieras tener",
                img: "assets/img/kamasutra.jpg",
                aparicion: "1964-01-01",
                casa: "Marvel"
            },
            {
                nombre: "MASCULAN",
                bio: "Ademas de que incluye un retardante poderoso no podrias encontra un mejor preservative quien te da la confiabilidad durante toda la noche",
                img: "assets/img/masculan.png",
                aparicion: "1962-05-01",
                casa: "Marvel"
            },
            {
                nombre: "MAXMEN",
                bio: "Maxmen quiere cuidarte como si fueras tu mismo hasta en los momentos de calentura que no piensas en nada mas que en tu placer sexual no puedes obtener mayor seguridad si no es con maxmen",
                img: "assets/img/maxmen.jpg",
                aparicion: "1940-06-01",
                casa: "DC"
            },
            {
                nombre: "PANTERA",
                bio: "Pantera es una de las mas reconocidos preservativos evaluado mundualmente te proteje un 99% sin dudar usa pantera y planifica cuando expandirte y no te arriesgues con algo barato recuerda lo barato cuesta caro",
                img: "assets/img/pantera.jpg",
                aparicion: "1962-08-01",
                casa: "Marvel"
            },
            {
                nombre: "TULIPAN",
                bio: "Encuentra nuestro condones y la variedad de ellos en las distintas farmacias autorizadas no juegues con algo tan importante como tu futuro planifica y avita contagios sexuales no dejes que te engañen y no tengas miedo de usar condon",
                img: "assets/img/tulipan.jpg",
                aparicion: "1974-11-01",
                casa: "Marvel"
            }
        ];
        console.log("Servicio listo para usarse!!!!");
    }
    HeroesService.prototype.getHeroes = function () {
        return this.heroes;
    };
    HeroesService.prototype.getHeroe = function (idx) {
        return this.heroes[idx];
    };
    HeroesService.prototype.buscarHeroes = function (termino) {
        var heroesArr = [];
        termino = termino.toLowerCase();
        for (var _i = 0, _a = this.heroes; _i < _a.length; _i++) {
            var heroe = _a[_i];
            var nombre = heroe.nombre.toLowerCase();
            if (nombre.indexOf(termino) >= 0) {
                heroesArr.push(heroe);
            }
        }
        return heroesArr;
    };
    HeroesService = __decorate([
        core_1.Injectable()
    ], HeroesService);
    return HeroesService;
}());
exports.HeroesService = HeroesService;
;
