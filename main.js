class JuegoPiedraPapelTijera {
  constructor() {
    this.opciones = ["Piedra", "Papel", "Tijera"];
    this.gana = 0;
    this.pierde = 0;
  }

  aleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// la eleccion de la jugada realice ARROW FUNCTION. => ? : ".." en las opciones de la jugada agregamos el -1 porque los arrays comienzan a contarse desde cero.. 
  elect = jugada => (jugada >= 1 && jugada <= 3) ? this.opciones[jugada - 1] : "Mal elegido";

  jugar = () => {
    while (this.gana < 3 && this.pierde < 3) {
      const pc = this.aleatorio(1, 3);
      const jugador = parseInt(prompt("Elegí 1 piedra 2 papel 3 tijera"));

      if (isNaN(jugador) || jugador < 1 || jugador > 3) {
        alert("Por favor, elige un número válido (1, 2 o 3).");
        continue;
      }

      alert(`Elegiste ${this.elect(jugador)}`);
      alert(`Pc eligió ${this.opciones[pc - 1]}`);

      if (jugador == pc) {
        alert("Empate");
      } else if (
        (jugador == 1 && pc == 3) ||
        (jugador == 3 && pc == 2) ||
        (jugador == 2 && pc == 1)
      ) {
        alert("Ganaste");
        this.gana++;
      } else {
        alert("Perdiste");
        this.pierde++;
      }
    }

    if (this.gana >= 3) {
      alert("Felicidades! Ganaste la partida.");
    } else {
      alert("Perdiste la partida. Mejor suerte la próxima!");
    }
  }
}

const juego = new JuegoPiedraPapelTijera();

do {
  juego.jugar();
  reiniciarJuego = confirm("Desea jugar nuevamente?");
  juego.gana = 0;
  juego.pierde = 0;
} while (reiniciarJuego);

alert("Gracias por jugar. Hasta la próxima!");
