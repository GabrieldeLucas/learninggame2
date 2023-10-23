// || Atualizar Player (pegar id do player, desenhar ele no lugar)
function updatePlayer() {
  if (isMeeting(Courses[currentCourse].dogEnd.x, Courses[currentCourse].dogEnd.y, Pushers[0]) && Courses[currentCourse].done == false) {
    Courses[currentCourse].done = true;
    courseEnd();
  }

  playerStyle = document.querySelector(".player");
  document.querySelector(`.player`).style.zIndex = '5';

  for (x = 0; x < world.width; x++) {
    for (y = 0; y < world.height; y++) {
      if (player.x == x && player.y == y) {
        playerStyle.style.gridColumnStart = player.x + 1;
        playerStyle.style.gridRowStart = player.y + 1;
      }
    }
  }
  
}

// || Interação (verificar se está encostando em algo interagível, fazer a interação)
function checkInteraction(){
  for(i = 0; i < Signs.length; i++){
    if (isMeeting(player.x, player.y, Signs[i])) {
      Interact.style.opacity = '1';
      console.log(`Entered sign(${i})`);
      currentSign = i;
      break;
    } else {
      Interact.style.opacity = '0.3';
    }
  }

  for(b = 0; b < Portals.length; b++) {
    let thatB = b;
    if (isMeeting(player.x, player.y, Portals[b])) {
      player.canWalk = false;
      playerStyle.style.opacity = '0.2';
      let hBackup = display.style.height;

      display.style.height = '0px';
      setTimeout(function() {
        setCourse(Portals[thatB].destiny);
        display.style.height = hBackup;
        player.canWalk = true;
      }, 500);
    }
  }
}

let signTimerW = 0;

function interact() {
  if (Signs.length > 0) {
    if (isMeeting(player.x, player.y, Signs[currentSign]) && isTextApearing == false) {
      isTextApearing = true;
      dialog.innerHTML = Signs[currentSign].message;
      dialog.style.height = 'fit-content';
      dialogWrap.style.top = "60px";
      dialogTimerContainer.style.setProperty("--dialog-timer-t", `linear 1s width `)

      for (j = 1; j <= 4; j++) {
        messageDelay(j);
      }

      function messageDelay(j) {
        setTimeout(function () {
          signTimerW += 25;
          // console.log(`Sign display: ${signTimerW}`);
          dialogTimerContainer.style.setProperty(
            "--dialog-timer-w",
            `${signTimerW}%`
          );
        }, 500 * j);
      }

      setTimeout(function(){
        isTextApearing = false;
        dialogWrap.style.top = "-150px";
        signTimerW = 0;
        dialogTimerContainer.style.setProperty("--dialog-timer-t", 'none');
        dialogTimerContainer.style.setProperty("--dialog-timer-w", `${0}%`);
      }, 3700)
    }
  }
}

// || Movimento (verificar a colisão do player, mover)
function canWalk(direction, amount) {
  if (player.canWalk == false) return false;

  let can = true;

  switch (direction) {
    case "horizontal":
      // Se o player andar para o void
      if (!isBetween(player.x + amount, 0, world.width - 1)) return false;

      for (i = 0; i < Walls.length; i++) {
        // Se o player andar para uma parede
        if (isMeeting(player.x + amount, player.y, Walls[i])) return false;

        // Se estiver uma parede na frente do pusher ou se tiver o void
        for (pu = 0; pu < Pushers.length; pu++) {
          if (isMeeting(player.x + amount, player.y, Pushers[pu])) {
            if (Courses[currentCourse].done == true) return true;
            if (isMeeting(Pushers[pu].x + amount, Pushers[pu].y, Walls[i]) || isMeeting(player.x + amount, player.y, Pushers[pu]) && (!isBetween(Pushers[pu].x + amount, 0, world.width - 1))) {
              return false;
            }
          }
        }
      }
      
      break;
    case "vertical":
      // Se o player andar para o void
      if (!isBetween(player.y + amount, 0, world.height - 1)) return false;
      
      for (i = 0; i < Walls.length; i++) {
        // Se o player andar para uma parede
        if (isMeeting(player.x, player.y + amount, Walls[i])) return false;

        // Se estiver uma parede na frente do pusher ou se tiver o void
        for (pu = 0; pu < Pushers.length; pu++) {
          if (isMeeting(player.x, player.y + amount, Pushers[pu])) {
            if (Courses[currentCourse].done == true) return true;
            if (isMeeting(Pushers[pu].x, Pushers[pu].y + amount, Walls[i]) || isMeeting(player.x, player.y + amount, Pushers[pu]) && (!isBetween(Pushers[pu].y + amount, 0, world.height - 1))) {
            return false;
            }
          }
        }
      }
      break;
    default:
      console.log("Bug no canWalk");
  }
  return can;
}

function move(direction, amount) {
  if (canWalk(direction, amount)) {
    switch (direction) {
      case "horizontal":
        for (pu = 0; pu < Pushers.length; pu++) {
          if (isMeeting(player.x + amount, player.y, Pushers[pu]) && Courses[currentCourse].done == false) {
            let push = document.querySelector(`.push${pu}`);
            push.remove();
            Pushers[pu].x += amount;
            drawPushers();
          }
        }
        player.x += amount;
        break;
      case "vertical":
        for (pu = 0; pu < Pushers.length; pu++) {
          if (isMeeting(player.x, player.y + amount, Pushers[pu]) && Courses[currentCourse].done == false) {
            let push = document.querySelector(`.push${pu}`);
            push.remove();
            Pushers[pu].y += amount;
            drawPushers();
          }
        }
        player.y += amount;
        break;
      default:
        console.log("Bug no move");
    }
    checkInteraction();
    updatePlayer();
    // console.log(`X: ${player.x} | Y: ${player.y}`);
  }
}
