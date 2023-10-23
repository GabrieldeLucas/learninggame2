// || Variáveis (pegar botões, displays, dialog-box, etc.)
let displayPlace = document.getElementById("display");
let wallStyle = document.querySelector(".wall");
let Interact = document.querySelector("#Interact")
let dialog = document.querySelector("#dialog");
let dialogWrap = document.querySelector(".dialog-box");
let dialogTimerContainer = document.querySelector('.dialog-timer')
let resetButton = document.getElementById('reset');
let displayCourseClear = document.getElementById('end-text');

// || Controles do teclado (WASD, setas, espaço e R)
document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "w":
      move("vertical", -1);
      break;
    case "s":
      move("vertical", 1);
      break;
    case "d":
      move("horizontal", 1);
      break;
    case "a":
      move("horizontal", -1);
      break;
  }

  switch (event.keyCode) {
    case 37:
      move("horizontal", -1);
      break;
    case 38:
      move("vertical", -1);
      break;
    case 39:
      move("horizontal", 1);
      break;
    case 40:
      move("vertical", 1);
      break;
    case 32:
      interact();
      break;
    case 82:
      setCourse(currentCourse);
      break;
  }
});

// || Setup Inicial (criar mundo, player e definir array de objetos)
let currentCourse = 0;
let currentSign = 0;
let isTextApearing = false;

const player = {
  x: 0,
  y: 0,
  canWalk: true
};

const world = {
  height: Courses[0].height,
  width: Courses[0].width,
};

let Walls = [];
let Signs = [];
let Planks = [];
let Portals = [];
let Decorations = [];
let Pushers = [];

// || Começar Jogo
setCourse(0);