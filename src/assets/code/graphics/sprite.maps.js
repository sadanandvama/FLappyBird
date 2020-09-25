// get the spritesheet for manipulation
var spritesheet = document.getElementById('spritesheet');

// sprite maps for objects
var sprite = {
    maps: {
        orange_bird: {
            width: 50,
            height: 50,
            sprites: [
                { frame: 1, x: 879, y: 10 },
                { frame: 2, x: 939, y: 10 },
                { frame: 3, x: 999, y: 10 },
                { frame: 4, x: 939, y: 10 },
            ]
        },
        green_bird: {   
            radius: 12,
            frame: 0,
            gravity: 0.25,
            jump: 2.6,
            speed: 0,
            rotation: 0,
            width: 50,
            height: 50,
            sprites: [
                { frame: 1, x: 880, y: 59 },
                { frame: 2, x: 940, y: 59 },
                { frame: 3, x: 1000, y: 59},
                { frame: 4, x: 940, y: 59 }
            ]
        },
        blue_bird: {        
            width: 50,
            height: 50,
            sprites: [
                { frame: 1, x: 880, y: 105 },
                { frame: 2, x: 940, y: 105 },
                { frame: 3, x: 1000, y: 105},
                { frame: 4, x: 940, y: 105 },
            ]
        },
        night_background : {
            width: 228,
            height: 624,
            sprites: [
                { frame: 1, x: 163, y: 1 }
            ]
        },
        light_background: {
            width: 228,
            height: 624,
            sprites: [
                { frame: 1, x: 398, y: 1 }
            ]
        },
        pipe_inverted: {
            width: 81,
            height: 101,
            sprites: [
                { frame: 1, x: 2, y: 1 }
            ]
        },
        pipe_inverted1: {
            width: 81,
            height: 60,
            sprites: [
                { frame: 1, x: 2, y: 1 }
            ]
        },
        pipe_inverted2: {
            width: 81,
            height: 60,
            sprites: [
                { frame: 1, x: 2, y: 1 }
            ]
        },
        pipe_extended: {
            width: 77,
            height: 58,
            sprites: [
                { frame: 1, x: 85, y: 1 }
            ]
        },
        green1_floor: {
            width: 216,
            height: 20,
            sprites: [
                { frame: 1, x: 632, y: 164 },
                { frame: 2, x: 642, y: 164 },
                { frame: 3, x: 652, y: 164 }
            ]
        },
        green_2_floor: {
            width: 216,
            height: 20,
            sprites: [
                { frame: 1, x: 632, y: 164 },
                { frame: 2, x: 642, y: 164 },
                { frame: 3, x: 652, y: 164 }
            ]
        },
        green_3_floor: {},
        play: {
            width: 133,
            height: 84,
            sprites: [
                { frame: 1, x: 1, y: 105 }
            ]
        },
        replay: {},
        exit: {},
        sound: {},
        scoreboard: {
            width: 290,
            height: 148,
            sprites: [
                { frame: 1, x: 650, y: 474 }
            ]
        },
        flappy_bird_logo: {
            width: 238,
            height: 70,
            sprites: [
                { frame: 1, x: 1095, y: 6 }
            ]
        },
        get_ready_logo: {
            width: 238,
            height: 70,
            sprites: [
                { frame: 1, x: 1095, y: 78 }
            ]
        },
        game_over_logo: {
            width: 240,
            height: 70,
            sprites: [
                { frame: 1, x: 1095, y: 148 }
            ]
        },
        tap_screen_logo: {
            width: 155,
            height: 140,
            sprites: [
                { frame: 1, x: 885, y: 163 }
            ]
        },                    
        font_zero: {
            width: 60,
            height: 83,
            sprites: [
                { frame: 1, x: 1114, y: 230 }
            ]
        },
        font_one: {
            width: 35,
            height: 83,
            sprites: [
                { frame: 1, x: 1180, y: 230 }
            ]
        },
        font_two: {
            width: 50,
            height: 83,
            sprites: [
                { frame: 1, x: 1227, y: 230 }
            ]
        },
        font_three: {
            width: 55,
            height: 83,
            sprites: [
                { frame: 1, x: 1285, y: 230 }
            ]
        },
        font_four: {
            width: 60,
            height: 83,
            sprites: [
                { frame: 1, x: 1114, y: 315 }
            ]
        },
        font_five: {
            width: 55,
            height: 83,
            sprites: [
                { frame: 1, x: 1170, y: 315 }
            ]
        },
        font_six: {
            width: 50,
            height: 83,
            sprites: [
                { frame: 1, x: 1227, y: 315 }
            ]
        },
        font_seven: {
            width: 55,
            height: 83,
            sprites: [
                { frame: 1, x: 1285, y: 315 }
            ]
        },
        font_eight: {
            width: 60,
            height: 83,
            sprites: [
                { frame: 1, x: 1114, y: 398 }
            ]
        },
        font_nine: {
            width: 55,
            height: 83,
            sprites: [
                { frame: 1, x: 1170, y: 398 }
            ]
        }
    }
}

