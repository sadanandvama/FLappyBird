var play = function () {
    this.name = 'play';
    var reset = false;
    score = 0;
    
    var background = new object['Background'](0, 0, 'night_background', 'night_background');
    background.width = 350;
    background.height = 650;

    var green_bird = new object['Bird'](100, 200, 'green_bird', 'green_bird', 8);
    var green1_floor = new object['Floor'](-10, 630, 'floor', 'green1_floor', 10);
    var green2_floor = new object['Floor'](172, 630, 'floor', 'green1_floor', 10);

    var pipe_north = new object['PipeNorth'](c.width + 80, -80, 'northPipe', 'pipe_inverted', 0);
    var pipe_south = new object['PipeSouth'](c.width + 80, 400, 'southPipe', 'pipe_extended', 0);
    pipe_north.height = 350;
    pipe_south.height = 350;


    var gravity = 0.25;
    var jump = 3;
    var speed = 0;
    var tap1 = new Audio();
    tap1.src = "./assets/audio/tap-2.wav";
    var death = new Audio();
    death.src = "./assets/audio/death.wav";

    var loop = {
        update: function () {
            background.update();
            green_bird.update();
            green1_floor.update();
            green2_floor.update();
            pipe_north.update();
            pipe_south.update();
            pipes.update();

            document.addEventListener("click", moveUp);
        },
        run: function (timestamp) {
            ctx.clearRect(0, 0, c.width, c.height);
            loop.update(timestamp);

            if (!reset)
                window.requestAnimationFrame(loop.run);

            if (green_bird.position.y + green_bird.height >= ctx.height - green1_floor.height && !reset) {
                green_bird.position.y = ctx.height - green1_floor.height - green_bird.height + 10;
                green_bird = new object['Bird'](100, green_bird.position.y, 'green_bird', 'green_bird', 0);
                green1_floor = new object['Floor'](-10, 630, 'floor', 'green1_floor', 0);
                green2_floor = new object['Floor'](172, 630, 'floor', 'green1_floor', 0); 
                death.play();
                states.current = states.end;
                end();
                reset = true;
            }
            else {
                speed += gravity;
                green_bird.position.y += speed;
            }
        }
    }

    this.start = function () {       
      window.requestAnimationFrame(loop.run);
    }

    this.stop = function () {
        ctx.clearRect(0, 0, c.width, c.height);
    }

    function flap() {
        speed = -jump;
    }

    function moveUp() {
        if (green_bird.position.y <= green_bird.height) {
            green_bird.position.y = 0;
            game.index = 4;
        }

        if (green_bird.position.y + green_bird.height <= ctx.height - green1_floor.height) {
            flap();
            tap1.play();
            green_bird.position.y -= jump;
        }
    }

    const pipes = {
        position: [],
        gap:125,
        maxYPos: -50,
        
        update: function () {
            
            this.position.push({
                x: ctx.width,
                y: this.maxYPos * (Math.random() + 3)
            });
            
            for (var i = 0; i < this.position.length; i++) {
                pipe_north.position.x -= 0.01;
                pipe_south.position.x -= 0.01;

                //Check for the collision
                if (((green_bird.position.x + green_bird.width >= pipe_north.position.x && green_bird.position.y <= pipe_north.position.y + pipe_north.height)
                    || (green_bird.position.x + green_bird.width >= pipe_south.position.x && green_bird.position.y + green_bird.height >= pipe_south.position.y)
                    || (green_bird.position.y + green_bird.height >= ctx.height + green1_floor.height)) && !reset)
                {
                    death.play();
                    states.current = states.end;
                    end();
                    reset = true;
                }

                var randMath = (Math.random() + 3);

                //Reset the X position of pipes once they pass the canvas
                if (pipe_north.position.x < -100) {
                    score += 1;
                    pipe_north.position.x = ctx.width + 40;
                    pipe_north.position.y = this.maxYPos * randMath;
                }

                if (pipe_south.position.x < -100) {
                    pipe_south.position.y = pipe_north.position.y + pipe_north.height + this.gap;
                    pipe_south.position.x = ctx.width + 40;
                }
            }

            BestScore = BestScore > score ? BestScore : score;
        }
    }

    this.start();
};
