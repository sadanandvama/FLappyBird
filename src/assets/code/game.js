const states = {
    current: 0,
    start: 2,
    play: 3,
    end: 4
}

const playButtonPosition = {
    x: 100,
    y: 380,
    w: 133,
    h: 84
}

var score = 0;
var BestScore = 0;

var Game = function () {
    var index = 0;
    var stateNames = ['intro', 'main', 'start', 'play', 'end'];

    var tap = new Audio();
    tap.src = "./assets/audio/tap.wav";

    var initial_game_state = new state[index];
    this.start = function () {
        initial_game_state.start();
    }
    
    c.addEventListener("click", function (evt) {
        switch (stateNames[index]) {
            case 'intro':            
                index = 2;
                tap.play();
                start();
                break;
            case 'start':           
                index = 3;
                states.current = states.play;
                play();
                break;
            case 'play':
                let cvsSize = c.getBoundingClientRect();
                var pointerXPos = evt.clientX - cvsSize.left;
                var pointerYPos = evt.clientY - cvsSize.top;

                if (pointerXPos >= playButtonPosition.x && pointerXPos <= playButtonPosition.x + playButtonPosition.w
                    && pointerYPos >= playButtonPosition.y && pointerYPos <= playButtonPosition.y + playButtonPosition.h)
                {
                    if (states.current == states.end) {
                        index = 0;
                        start();
                    }
                    else {
                        index = 3;
                    }
                }
                
                break;
            case 'end':
                index = 2;
                break;
        }
    });
}

var game = new Game();
game.start();

