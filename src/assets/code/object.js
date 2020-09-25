var object = [];
var BaseObject = function(x, y, name = null, sprite_name = null, framerate = null) {
    if (name === null) console.exception('Name cannot be null, it will become orphaned and consume process for no reason');
    this.sprite_name = sprite_name !== null ? sprite_name : 'orange_bird';
    this.name = name;
    this.position = { x: x, y: y };

    this.update = function(timestamp) {
        this.animations = (timestamp) => {
            if (framerate == null) {
                graphics.sprites.draw(this);
            } else {
                graphics.sprites.animate(this, framerate);
            }        
        }
        this.animations(timestamp);

        this.input = (timestamp) => {
            
        }
    }
};
object['Background'] = BaseObject;
object['Bird'] = BaseObject;
object['PipeNorth'] = BaseObject;
object['PipeSouth'] = BaseObject;
object['Play'] = BaseObject;
object['Floor'] = BaseObject;
object['GetReady'] = BaseObject;
object['Tap'] = BaseObject;
object['GameOver'] = BaseObject;
object['GameLogo'] = BaseObject;
object['ScoreBoard'] = BaseObject;
object['FontZero'] = BaseObject;
object['FontOne'] = BaseObject;
object['FontTwo'] = BaseObject;
object['FontThree'] = BaseObject;
object['FontFour'] = BaseObject;
object['FontFive'] = BaseObject;
object['FontSix'] = BaseObject;
object['FontSeven'] = BaseObject;
object['FontEight'] = BaseObject;
object['FontNine'] = BaseObject;
object['BestScoreDisplay'] = BaseObject;
