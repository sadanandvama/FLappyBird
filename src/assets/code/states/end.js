var end = function () {
    this.name = 'end';
    
        
    var background = new object['Background'](0, 0, 'night_background', 'night_background');
    background.width = 350;
    background.height = 650;

    var green_bird = new object['Bird'](80, 596, 'greeny', 'green_bird', 0);
    var green1_floor = new object['Floor'](-10, 630, 'floor', 'green1_floor', 0);
    var green2_floor = new object['Floor'](172, 630, 'floor', 'green1_floor', 0);
    var game_over = new object['GameOver'](60, 80, 'GameOver', 'game_over_logo', 0);
    var play = new object['Play'](100, 380, 'play', 'play', 0);
    var ScoreBoard = new object['ScoreBoard'](30, 180, 'ScoreBoard', 'scoreboard', 0);
    var FontZero = new object['FontZero'](255, 225, 'FontZero', 'font_zero', 0);
    var FontOne = new object['FontOne'](255, 225, 'FontOne', 'font_one', 0);
    var FontTwo = new object['FontTwo'](255, 225, 'FontTwo', 'font_two', 0);
    var FontThree = new object['FontThree'](255, 225, 'FontThree', 'font_three', 0);
    var FontFour = new object['FontFour'](255, 225, 'FontFour', 'font_four', 0);
    var FontFive = new object['FontFive'](255, 225, 'FontFive', 'font_five', 0);
    var FontSix = new object['FontSix'](255, 225, 'FontSix', 'font_six', 0);
    var FontSeven = new object['FontSeven'](255, 225, 'FontSeven', 'font_sevan', 0);
    var FontEight = new object['FontEight'](255, 225, 'FontEight', 'font_eight', 0);
    var FontNine = new object['FontNine'](255, 225, 'FontNine', 'font_eight', 0);
    var BestScoreDisplay;


    switch (BestScore) {
        case 0:
            BestScoreDisplay = new object['BestScoreDisplay'](255, 280, 'BestScoreDisplay', 'font_zero', 0);
            break;
        case 1:
            BestScoreDisplay = new object['BestScoreDisplay'](255, 280, 'BestScoreDisplay', 'font_one', 0);
            break;
        case 2:
            BestScoreDisplay = new object['BestScoreDisplay'](255, 280, 'BestScoreDisplay', 'font_two', 0);
            break;
        case 3:
            BestScoreDisplay = new object['BestScoreDisplay'](255, 280, 'BestScoreDisplay', 'font_three', 0);
            break;
        case 4:
            BestScoreDisplay = new object['BestScoreDisplay'](255, 280, 'BestScoreDisplay', 'font_four', 0);
            break;
        case 5:
            BestScoreDisplay = new object['BestScoreDisplay'](255, 280, 'BestScoreDisplay', 'font_five', 0);
            break;
        case 6:
            BestScoreDisplay = new object['BestScoreDisplay'](255, 280, 'BestScoreDisplay', 'font_six', 0);
            break;
        case 7:
            BestScoreDisplay = new object['BestScoreDisplay'](255, 280, 'BestScoreDisplay', 'font_seven', 0);
            break;
        case 8:
            BestScoreDisplay = new object['BestScoreDisplay'](255, 280, 'BestScoreDisplay', 'font_eight', 0);
            break;
        case 9:
            BestScoreDisplay = new object['BestScoreDisplay'](255, 280, 'BestScoreDisplay', 'font_nine', 0);
            break;
    }

    //Set the font size to fit into the available place in scoreboard
    FontZero.width = 20;
    FontZero.height = 25;
    FontOne.width = 15;
    FontOne.height = 25;
    FontTwo.width = 15;
    FontTwo.height = 25;
    FontThree.width = 15;
    FontThree.height = 25;
    FontFour.width = 15;
    FontFour.height = 25;
    FontFive.width = 15;
    FontFive.height = 25;
    FontSix.width = 15;
    FontSix.height = 25;
    FontSeven.width = 15;
    FontSeven.height = 25;
    FontEight.width = 15;
    FontEight.height = 25;
    FontNine.width = 15;
    FontNine.height = 25;
    BestScoreDisplay.width = 20;
    BestScoreDisplay.height = 25;
    

    //console.log(score + "-" + BestScore);
    var loop = {
        update: function (timestamp) {
            background.update(timestamp);
            green_bird.update(timestamp);
            green1_floor.update(timestamp);
            green2_floor.update(timestamp);
            game_over.update(timestamp);
            play.update(timestamp);
            ScoreBoard.update(timestamp);

            switch (score) {
                case 0:
                    FontZero.update(timestamp);
                    break;
                case 1:
                    FontOne.update(timestamp);
                    break;
                case 2:
                    FontTwo.update(timestamp);
                    break;
                case 3:
                    FontThree.update(timestamp);
                    break;
                case 4:
                    FontFour.update(timestamp);
                    break;
                case 5:
                    FontFive.update(timestamp);
                    break;
                case 6:
                    FontSix.update(timestamp);
                    break;
                case 7:
                    FontSeven.update(timestamp);
                    break;
                case 8:
                    FontEight.update(timestamp);
                    break;
                case 9:
                    FontNine.update(timestamp);
                    break;
            }

            BestScoreDisplay.update(timestamp);
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
