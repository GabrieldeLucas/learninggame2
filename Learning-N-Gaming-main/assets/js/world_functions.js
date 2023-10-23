// || Carregar Mundo (zerar variáveis, spawnar o player, criar objetos e redefinir dimensões)
function setCourse(courseID = 0) {
  // soft reset no mundo
  Walls = [];
  Signs = [];
  Planks = [];
  Portals = [];
  Decorations = [];
  Pushers = [];
  displayPlace.innerHTML = '';

  // spawnnar o player em lugares diferentes dependendo da fase que ele veio
  displayPlace.insertAdjacentHTML("beforeend",`<div class="player"></div>`);
  if (currentCourse != courseID) {
    switch (currentCourse) {
      case 0:
        currentCourse = courseID;
        Courses[currentCourse].setEntities();
        break;
      case 1:
          currentCourse = courseID;
          Courses[currentCourse].setEntities(18, 5);
        break;
      case 2:
        currentCourse = courseID;
        Courses[currentCourse].setEntities(14, 1);
        break;
      case 3:
        currentCourse = courseID;
        Courses[currentCourse].setEntities(14, 9);
        break;
    }
  } else {
    currentCourse = courseID;
    Courses[currentCourse].setEntities();
  }

  // setar dimensões e criar objetos
  world.width = Courses[currentCourse].width;
  world.height = Courses[currentCourse].height;

  console.log(`${world.width} | ${world.height}`);

  let wid = '';
  let hei = '';

  for (w = 0; w < world.width; w++) { wid += '40px ' }
  for (h = 0; h < world.height; h++) { hei += '40px ' }

  displayPlace.style.width = (world.width * 40) + 'px';
  displayPlace.style.height = (world.height * 40) + 'px';
  displayPlace.style.gridTemplateColumns = wid;
  displayPlace.style.gridTemplateRows = hei;

  // desenhar
  drawObjects();
  updatePlayer();
}
  
// || Desenhar Objetos
function drawObjects(){
  // walls
  for (w = 0; w < Walls.length; w++) {
    displayPlace.insertAdjacentHTML(
    "afterbegin",`
    <div class="wall${w}">
      <img src="assets/img/brick.jpeg" 
      width="40px"></img>
    </div>`
    );
    document.querySelector(`.wall${w}`).style.gridColumnStart = Walls[w].x + 1;
    document.querySelector(`.wall${w}`).style.gridRowStart = Walls[w].y + 1;
    // console.log(`Wall(${w}) placed`);
  }

  // planks
  for (p = 0; p < Planks.length; p++) {
    displayPlace.insertAdjacentHTML(
    "afterbegin",`
    <div class="planks${p}">
      <img src="assets/img/planks.png" 
      width="40px"></img>
    </div>`
    );
    document.querySelector(`.planks${p}`).style.gridColumnStart = Planks[p].x + 1;
    document.querySelector(`.planks${p}`).style.gridRowStart = Planks[p].y + 1;
    // console.log(`Plank(${p}) placed`);

  }

  // signs
  for (s = 0; s < Signs.length; s++) {
    displayPlace.insertAdjacentHTML(
    "afterbegin",`
    <div class="sign${s}">
      <img class="outline" src="assets/img/sign.png" 
      width="40px"></img>
    </div>
    `
    );
    document.querySelector(`.sign${s}`).style.gridColumnStart = Signs[s].x + 1;
    document.querySelector(`.sign${s}`).style.gridRowStart = Signs[s].y + 1;
    document.querySelector(`.sign${s}`).style.zIndex = '2';
    // console.log(`Sign(${s}) placed`);
  }

  // portals
  for (d = 0; d < Portals.length; d++) {
    displayPlace.insertAdjacentHTML(
    "afterbegin",`
    <div class="portal${d}">
      <img src="assets/img/portal_animated.gif" 
      width="40px" style="border-radius: 4px"></img>
    </div>
    `
    );
    document.querySelector(`.portal${d}`).style.gridColumnStart = Portals[d].x + 1;
    document.querySelector(`.portal${d}`).style.gridRowStart = Portals[d].y + 1;
    document.querySelector(`.portal${d}`).style.zIndex = '1';
    // console.log(`Portal(${d}) placed`);
  }

  // decorations
  for (e = 0; e < Decorations.length; e++) {
    displayPlace.insertAdjacentHTML(
    "afterbegin",`
    <div class="deco${e}">
      <img src="${Decorations[e].type}" 
      width="40px"></img>
    </div>
    `
    );
    document.querySelector(`.deco${e}`).style.gridColumnStart = Decorations[e].x + 1;
    document.querySelector(`.deco${e}`).style.gridRowStart = Decorations[e].y + 1;
    document.querySelector(`.deco${e}`).style.zIndex = '1';
    // console.log(`Deco(${e}, ${Decorations[e].type}) placed`);
  }

  drawPushers();
}
  
function drawPushers() {
// pushers
  for (h = 0; h < Pushers.length; h++) {
    displayPlace.insertAdjacentHTML(
    "afterbegin",`
    <div class="push${h} wobbly outline-black">
      <img src="assets/img/pusher.webp" 
      width="40px"></img>
    </div>
    `
    );
    document.querySelector(`.push${h}`).style.gridColumnStart = Pushers[h].x + 1;
    document.querySelector(`.push${h}`).style.gridRowStart = Pushers[h].y + 1;
    document.querySelector(`.push${h}`).style.zIndex = '2';
    // console.log(`Pusher(${h}) placed`);
  }
}

// || Criação de objetos
function addWall(wallX, wallY) {
  let newWall = {
    x: wallX,
    y: wallY
  };
  Walls.push(newWall);
}

function addPlank(plankX, plankY) {
  let newPlank = {
    x: plankX,
    y: plankY
  };
  Planks.push(newPlank);
}

function addSign(signX, signY, signMessage) {
  let newSign = {
    x: signX,
    y: signY,
    message: signMessage
  };
  Signs.push(newSign);
}

function addPusher(pushX, pushY) {
  let newPush = {
    x: pushX,
    y: pushY
  };
  Pushers.push(newPush);
}

function addDecoration(decoX, decoY, decoType) {
  let newDeco = {
    x: decoX,
    y: decoY,
    type: decoType
  };
  Decorations.push(newDeco);
}

function setPortal(portalX, portalY, courseID) {
  let newPortal = {
    x: portalX,
    y: portalY,
    destiny: courseID
  };
  Portals.push(newPortal);
}

function courseEnd() {
  displayCourseClear.style.opacity = 1;
  displayCourseClear.style.transform = 'scale(1.8)';
  setTimeout(function() {
    displayCourseClear.style.opacity = 0;
    displayCourseClear.style.transform = 'scale(1)';
  }, 500)
}

// || Funcionalidades
function isMeeting(x, y, entity) {
  return (y === entity.y && x === entity.x) ? true : false;
}

function isBetween(value, min, max) {
  return (value >= min && value <= max) ? true : false;
}