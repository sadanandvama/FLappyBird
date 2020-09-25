var intro = function () {
    this.name = 'intro';

    var background = new object['Background'](0, 0, 'night_background', 'night_background');
    background.width = 350;
    background.height = 650;

    var green1_floor = new object['Floor'](-10, 630, 'floor', 'green1_floor', 0);
    var green2_floor = new object['Floor'](172, 630, 'floor', 'green1_floor', 0);
    var tap_screen_logo = new object['Tap'](100, 280, 'tapscreen', 'tap_screen_logo', 0);
    var GameLogo = new object['GameLogo'](50, 180, 'GameLogo', 'flappy_bird_logo', 0);

    var loop = {
        update: function (timestamp) {
            background.update(timestamp);
            GameLogo.update(timestamp);
            green1_floor.update(timestamp);
            green2_floor.update(timestamp);
            tap_screen_logo.update();
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
};
