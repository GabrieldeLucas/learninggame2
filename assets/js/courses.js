// || Fases
const Courses = [
  {
    height: 11,
    width: 20,
    done: false,
    dogEnd: {
      x: 6,
      y: 4,
    },
    setEntities(pX = 4, pY = 4) {
      player.x = pX;
      player.y = pY;

      if (this.done == false) {
        addPusher(10, 5);
      } else {
        addPusher(this.dogEnd.x, this.dogEnd.y);
      }

      addWall(1, 1);
      addWall(1, 2);
      addWall(1, 3);
      addWall(1, 4);
      addWall(1, 5);
      addWall(1, 6);

      addPlank(2, 2);
      addPlank(2, 3);
      addPlank(2, 4);
      addPlank(2, 5);

      addPlank(3, 2);
      addPlank(3, 3);
      addPlank(3, 4);
      addPlank(3, 5);

      addPlank(4, 2);
      addPlank(4, 3);
      addPlank(4, 4);
      addPlank(4, 5);

      addPlank(5, 2);
      addPlank(5, 3);
      addPlank(5, 4);
      addPlank(5, 5);
      
      addPlank(6, 2);
      addPlank(6, 3);
      addPlank(6, 4);
      addPlank(6, 5);
      addPlank(6, 6);
      
      addWall(7, 1);
      addWall(7, 2);
      addWall(7, 3);
      addWall(7, 4);
      addWall(7, 5);
      addWall(7, 6);
      
      addWall(2, 1);
      addWall(3, 1);
      addWall(4, 1);
      addWall(5, 1);
      addWall(6, 1);
      
      addWall(2, 6);
      addWall(3, 6);
      addWall(4, 6);
      addWall(5, 6);
      
      addWall(3, 2); //furnace
      addWall(4, 2); //craft
      addWall(6, 2); //chest

      // Lago
      addWall(0, 8);
      addWall(1, 9);
      addWall(2, 9);
      addWall(3, 10);

      addDecoration(0, 8, 'assets/img/water.jpeg')
      addDecoration(0, 9, 'assets/img/water.jpeg')
      addDecoration(0, 10, 'assets/img/water.jpeg')
      addDecoration(1, 9, 'assets/img/water.jpeg')
      addDecoration(1, 10, 'assets/img/water.jpeg')
      addDecoration(2, 9, 'assets/img/water.jpeg')
      addDecoration(2, 10, 'assets/img/water.jpeg')
      addDecoration(3, 10, 'assets/img/water.jpeg')

      addDecoration(3, 9, 'assets/img/grass_strips.webp')
      addDecoration(1, 8, 'assets/img/grass_strips.webp')
      addDecoration(2, 8, 'assets/img/grass_strips.webp')
      addDecoration(0, 7, 'assets/img/grass_strips.webp')

      addDecoration(18, 9, 'assets/img/blue_flower.png');
      addDecoration(5, 10, 'assets/img/blue_flower.png');
      addDecoration(8, 3, 'assets/img/blue_flower.png');
      addDecoration(3, 7, 'assets/img/red_flower.png');
      addDecoration(0, 1, 'assets/img/red_flower.png');
      addDecoration(11, 9, 'assets/img/red_flower.png');
      
      addSign(2, 2, 'Essa é a sua casa! Divirta-se!');
      addSign(11, 5, 'Esse é um de seus cachorros. Leve-os até a esmeralda para vencer!');
      addSign(14, 5, 'Cada portal leva até um chachorro perdido. Mas tome cuidado! Existem muitos labirintos...');
      
      setPortal(19, 5, 1);
      setPortal(14, 0, 2);
      setPortal(14, 10, 3);
      
      addDecoration(6, 4, 'assets/img/emerald.png');
      addDecoration(3, 2, 'assets/img/furnace.png');
      addDecoration(4, 2, 'assets/img/crafting_table.png');
      addDecoration(6, 2, 'assets/img/bau.png');
      addDecoration(2, 5, 'assets/img/bed.png');
    }
  }, {
    width: 29,
    height: 11,
    done: false,
    dogEnd: {
      x: 25,
      y: 4,
    },
    setEntities(pX = 1, pY = 5) {
      player.x = pX;
      player.y = pY;

      if (this.done == false) {
        addPusher(2, 8);
      } else {
        addPusher(this.dogEnd.x, this.dogEnd.y);
      }

      addWall(4, 3);
      addWall(4, 5);

      addWall(5, 1);
      addWall(5, 2);
      addWall(5, 3);
      addWall(5, 5);
      addWall(5, 7);

      addWall(6, 1);
      addWall(6, 5);
      addWall(6, 7);
      addWall(6, 8);
      addWall(6, 9);
      addWall(6, 10);

      addWall(7, 0);
      addWall(7, 1);
      addWall(7, 3);
      addWall(7, 5);
      addWall(7, 10);

      addWall(8, 0);
      addWall(8, 1);
      addWall(8, 7);
      addWall(8, 8);

      addWall(9, 0);
      addWall(9, 1);
      addWall(9, 3);
      addWall(9, 4);
      addWall(9, 5);
      addWall(9, 6);
      addWall(9, 9);

      addWall(10, 0);
      addWall(10, 6);
      addWall(10, 7);
      addWall(10, 8);

      addWall(11, 0);

      addWall(12, 0);
      addWall(12, 1);
      addWall(12, 2);
      addWall(12, 3);
      addWall(12, 4);
      addWall(12, 5);
      addWall(12, 6);
      addWall(12, 7);
      addWall(12, 8);
      addWall(12, 10);

      addWall(13, 0);
      addWall(13, 3);
      addWall(13, 4);
      addWall(13, 5);
      addWall(13, 6);
      addWall(13, 8);
      addWall(13, 10);

      addWall(14, 0);
      addWall(14, 7);
      addWall(14, 8);
      addWall(14, 10);

      addWall(15, 0);
      addWall(15, 4);
      addWall(15, 8);

      addWall(16, 0);
      addWall(16, 1);
      addWall(16, 4);

      addWall(17, 0);
      addWall(17, 1);
      addWall(17, 2);
      addWall(17, 4);
      addWall(17, 7);
      addWall(17, 8);
      addWall(17, 9);
      addWall(17, 10);

      addWall(18, 0);
      addWall(18, 1);
      addWall(18, 4);
      addWall(18, 5);
      addWall(18, 6);
      addWall(18, 9);
      addWall(18, 10);

      addWall(19, 1);
      addWall(19, 9);
      addWall(19, 10);

      addWall(20, 1);
      addWall(20, 2);
      addWall(20, 3);
      addWall(20, 4);
      addWall(20, 9);
      addWall(20, 10);

      addWall(21, 5);
      addWall(21, 7);
      addWall(21, 8);
      addWall(21, 9);

      addWall(22, 2);
      addWall(22, 3);
      addWall(22, 4);
      addWall(22, 5);
      addWall(22, 10);

      addWall(23, 1);
      addWall(23, 5);
      addWall(23, 7);
      addWall(23, 8);
      addWall(23, 10);

      addWall(24, 1);

      addWall(25, 2);
      addWall(25, 3);
      addWall(25, 5);
      addWall(25, 6); 
      addWall(25, 7);
      addWall(25, 8);
      addWall(25, 9);

      addDecoration(25, 4, "assets/img/emerald.png");
      addDecoration(1, 1, 'assets/img/red_flower.png');
      addDecoration(4, 9, 'assets/img/red_flower.png');
      addDecoration(10, 1, 'assets/img/red_flower.png');
      addDecoration(15, 10, 'assets/img/red_flower.png');
      addDecoration(23, 4, 'assets/img/red_flower.png');
      addDecoration(8, 6, 'assets/img/blue_flower.png');
      addDecoration(5, 0, 'assets/img/blue_flower.png');
      addDecoration(18, 8, 'assets/img/blue_flower.png');
      addDecoration(0, 9, 'assets/img/grass_strips.webp');
      addDecoration(1, 10, 'assets/img/grass_strips.webp');
      addDecoration(11, 10, 'assets/img/grass_strips.webp');
      addDecoration(6, 2, 'assets/img/grass_strips.webp');
      addDecoration(13, 1, 'assets/img/grass_strips.webp');
      addDecoration(15, 1, 'assets/img/grass_strips.webp');

      addDecoration(24, 10, 'assets/img/brick.jpeg')
      addSign(27, 9, 'Como você chegou até aqui!?!?<br>Parece que usaste o suco, não é mesmo?')


      addWall(26, 4);

      addSign(2, 2, '= Labirinto da Perdição =<br>Pense bem antes de fazer um movimento!');
      setPortal(0, 5, 0);
    }
  }, {
    width: 17,
    height: 11,
    done: false,
    dogEnd: {
      x: 1,
      y: 1,
    },
    setEntities(pX = 8, pY = 9) {
      player.x = pX;
      player.y = pY;

      if (this.done == false) {
        addPusher(10, 8);
      } else {
        addPusher(this.dogEnd.x, this.dogEnd.y);
      }

      addWall(0, 3);
      addWall(0, 9);

      addWall(1, 3);
      addWall(1, 6);
      addWall(1, 9);

      addWall(2, 3);
      addWall(2, 6);
      addWall(2, 8);
      addWall(2, 9);
      addWall(2, 10);

      addWall(3, 0);
      addWall(3, 2);
      addWall(3, 3);

      addWall(4, 0);
      addWall(4, 2);
      addWall(4, 5);
      addWall(4, 8);
      addWall(4, 9);

      addWall(5, 0);
      addWall(5, 2);

      addWall(6, 0);
      addWall(6, 5);
      addWall(6, 7);
      addWall(6, 9);
      addWall(6, 10);

      addWall(7, 0);
      addWall(7, 5);
      addWall(7, 7);

      addWall(8, 0);
      addWall(8, 2);
      addWall(8, 7);

      addWall(9, 0);
      addWall(9, 3);
      addWall(9, 6);

      addWall(10, 0);
      addWall(10, 3);

      addWall(11, 0);
      addWall(11, 3);
      addWall(11, 5);
      addWall(11, 6);

      addWall(12, 0);
      addWall(12, 1);
      addWall(12, 6);
      addWall(12, 7);
      addWall(12, 8);
      addWall(12, 9);
      addWall(12, 10);

      addWall(13, 0);
      addWall(13, 1);
      addWall(13, 8);

      addWall(14, 0);
      addWall(14, 3);
      addWall(14, 4);
      addWall(14, 8);

      addWall(15, 0);
      addWall(15, 8);

      addWall(16, 0);
      addWall(16, 1);
      addWall(16, 2);
      addWall(16, 3);
      addWall(16, 4);
      addWall(16, 5);
      addWall(16, 6);
      addWall(16, 7);
      addWall(16, 8);

      addSign(14, 6, 'Caso você tenha perdido, aperte R ou \"Reset\" para recomeçar!')
      addDecoration(1, 1, 'assets/img/emerald.png');

      addDecoration(15, 10, 'assets/img/water.jpeg');
      addDecoration(14, 10, 'assets/img/water.jpeg');
      addDecoration(13, 10, 'assets/img/blue_flower.png');
      addDecoration(14, 9, 'assets/img/blue_flower.png');
      addDecoration(0, 8, 'assets/img/blue_flower.png');
      addDecoration(2, 0, 'assets/img/blue_flower.png');
      addDecoration(13, 4, 'assets/img/blue_flower.png');
      addDecoration(2, 4, 'assets/img/red_flower.png');
      addDecoration(5, 10, 'assets/img/red_flower.png');
      addDecoration(11, 7, 'assets/img/red_flower.png');
      addDecoration(9, 2, 'assets/img/red_flower.png');
      addDecoration(15, 7, 'assets/img/red_flower.png');
      addDecoration(7, 4, 'assets/img/grass_strips.webp');
      addDecoration(1, 8, 'assets/img/grass_strips.webp');
      addDecoration(15, 1, 'assets/img/grass_strips.webp');
      addDecoration(14, 1, 'assets/img/grass_strips.webp');

      setPortal(8, 10, 0);
    }
  }, {
    width: 20,
    height: 11,
    done: false,
    dogEnd: {
      x: 18,
      y: 7,
    },
    setEntities(pX = 14, pY = 1) {
      player.x = pX;
      player.y = pY;

      if (this.done == false) {
        addPusher(16, 2);
      } else {
        addPusher(this.dogEnd.x, this.dogEnd.y);
      }

      addWall(0, 2);
      addWall(0, 10);

      addWall(1, 2);
      addWall(1, 6);
      addWall(1, 7);
      addWall(1, 8);
      addWall(1, 10);

      addWall(2, 2);
      addWall(2, 3);
      addWall(2, 10);

      addWall(3, 1);
      addWall(3, 5);
      addWall(3, 6);
      addWall(3, 8);
      addWall(3, 10);

      addWall(4, 1);
      addWall(4, 8);
      addWall(4, 10);

      addWall(5, 0);
      addWall(5, 1);
      addWall(5, 2);
      addWall(5, 4);
      addWall(5, 8);
      addWall(5, 10);

      addWall(6, 6);
      addWall(6, 7);
      addWall(6, 8);
      addWall(6, 10);

      addWall(7, 2);
      addWall(7, 8);

      addWall(8, 0);
      addWall(8, 2);
      addWall(8, 3);
      addWall(8, 8);
      addWall(8, 10);

      addWall(9, 0);
      addWall(9, 2);
      addWall(9, 3);
      addWall(9, 6);
      addWall(9, 7);
      addWall(9, 10);

      addWall(10, 3);
      addWall(10, 4);
      addWall(10, 5);
      addWall(10, 8);
      addWall(10, 10);

      addWall(11, 8);
      addWall(11, 10);

      addWall(12, 0);
      addWall(12, 2);
      addWall(12, 3);
      addWall(12, 4);
      addWall(12, 6);
      addWall(12, 8);

      addWall(13, 6);
      addWall(13, 8);

      addWall(14, 3);
      addWall(14, 5);
      addWall(14, 8);
      addWall(14, 10);

      addWall(15, 4);

      addWall(16, 1);
      addWall(16, 5);
      addWall(16, 7);
      addWall(16, 8);
      addWall(16, 10);

      addWall(17, 1);
      addWall(17, 3);
      addWall(17, 10);

      addWall(18, 5);

      addDecoration(0, 0, 'assets/img/water.jpeg')
      addDecoration(1, 0, 'assets/img/water.jpeg')
      addDecoration(2, 0, 'assets/img/water.jpeg')
      addDecoration(3, 0, 'assets/img/water.jpeg')
      addDecoration(0, 1, 'assets/img/water.jpeg')
      addDecoration(1, 1, 'assets/img/water.jpeg')

      addDecoration(8, 7, 'assets/img/red_flower.png');
      addDecoration(19, 1, 'assets/img/red_flower.png');
      addDecoration(19, 8, 'assets/img/red_flower.png');
      addDecoration(3, 2, 'assets/img/red_flower.png');
      addDecoration(6, 0, 'assets/img/blue_flower.png');
      addDecoration(4, 9, 'assets/img/blue_flower.png');
      addDecoration(0, 3, 'assets/img/blue_flower.png');
      addDecoration(4, 0, 'assets/img/grass_strips.webp');
      addDecoration(9, 4, 'assets/img/grass_strips.webp');
      addDecoration(5, 7, 'assets/img/grass_strips.webp');
      addDecoration(19, 10, 'assets/img/grass_strips.webp');

      addDecoration(18, 7, 'assets/img/emerald.png');

      setPortal(14, 0, 0);
    }
  }
]


let hour = 0;
let min = 0;
let sec = 0;
let ms = 0;
const time = 10;
let stopwatchActivity = 'none';
let stopwatch;

function toStart() {
  if (stopwatchActivity == 'none') {
    stopwatch = setInterval(() => { timer() }, time);
    stopwatchActivity = 'active';
  } else {}
}

function toStop() {
  stopwatchActivity = 'none';
  clearInterval(stopwatch);
  document.querySelector('.saverunbtn').style.display = 'block';
}

function timer() {
  ms++;

  if (ms == 100) { ms = 0; sec++ }
  
  if (sec == 60) { sec = 0; min++; }

  if (min == 60) { min = 0; hour++; }

  let visualTimer = `${(hour < 10 ? `0${hour}` : hour)}:${(min < 10 ? `0${min}` : min)}:${(sec < 10 ? `0${sec}` : sec)}<span id="millisecond">:${ms < 10 ? `0${ms}` : ms}</span>`;
  document.querySelector('#timer').innerHTML = visualTimer;
  document.querySelector('#timer2').innerHTML = visualTimer;
}

toStart();

function checkAllCoursesDone() {
  let allDone = Courses.every(course => course.done);

  if (allDone) {
    toStop();
    clearInterval(checkInterval);
  }
}

const checkInterval = setInterval(checkAllCoursesDone, 1000); 
