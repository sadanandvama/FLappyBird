var graphics = {
    sprites: {
        draw: function(thing,  framerate = 0) {
            thing.framerate = framerate;  
            if (thing.frame == null ||
                thing.frame == undefined ||
                thing.frame === sprite.maps[thing.sprite_name].sprites.length - 1) {
        
                thing.frame = 0;
            }
            
            if (thing.count == null || thing.count == undefined) { thing.count = 0 }
            thing.count++;


            if (thing.framerate > 0 && thing.count % thing.framerate == 0 && sprite.maps[thing.sprite_name].sprites.length != 1) {
                thing.frame++;
            } else if (thing.framerate <= 0) {
                thing.frame = 0;
            }

            thing.width = thing.width == null || thing.width == undefined ? sprite.maps[thing.sprite_name]['width'] : thing.width;
            thing.height = thing.height > 0 ? thing.height : sprite.maps[thing.sprite_name]['height'];

            ctx.drawImage(
                spritesheet,
                sprite.maps[thing.sprite_name].sprites[thing.frame].x,
                sprite.maps[thing.sprite_name].sprites[thing.frame].y,
                sprite.maps[thing.sprite_name].width,
                sprite.maps[thing.sprite_name].height,
                thing.position.x,
                thing.position.y,
                thing.width,
                thing.height
            );
        },

        animate: function(thing, framerate = 0) {     
            graphics.sprites.draw(thing, framerate);
        }
    }
}
