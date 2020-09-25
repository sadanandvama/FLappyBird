var start = function () {
    this.name = 'start';

    var background = new object['Background'](0, 0, 'night_background', 'night_background');
    background.width = 350;
    background.height = 650;

    var green_bird = new object['Bird'](100, 200, 'greeny', 'green_bird', 0);
    var green1_floor = new object['Floor'](-10, 630, 'floor', 'green1_floor', 0);
    var green2_floor = new object['Floor'](172, 630, 'floor', 'green1_floor', 0);
    var get_ready_logo = new object['GetReady'](60, 350, 'GetReady', 'get_ready_logo', 0);

    var loop = {
        update: function (timestamp) {
            background.update(timestamp);
            green_bird.update(timestamp);
            green1_floor.update(timestamp);
            green2_floor.update(timestamp);
            get_ready_logo.update(timestamp);
            
        },
        run: function (timestamp) {
            ctx.clearRect(0, 0, c.width, c.height);
            loop.update(timestamp);
            window.requestAnimationFrame(loop.run);
        }
    }
    this.start = function () {
        window.requestAnimationFrame(loop.run);
    }

    this.stop = function () {
        ctx.clearRect(0, 0, c.width, c.height);
    }   

    this.start();
};
