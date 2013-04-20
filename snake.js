$(document).ready(function(){

    var c = document.getElementById("mainview");
    var ctx = c.getContext("2d");
    var w = $("#mainview").width();
    var h = $("#mainview").height();
    var DIR = {E: 0, W: 1, S: 2, N:3};
    var unit_len = 10;

    function Snake() {
        this.body = []; 
        this.dir ;
    }

    Snake.prototype.move = function(dir) {
        switch(dir){
            case DIR.E:
                for(var i = 0; i < this.body.length; i++){
                    this.body[i].x += 1;
                }
                break;
            case DIR.W:
                for(var i = 0; i < this.body.length; i++){
                    this.body[i].x -= 1;
                }
                break;
            case DIR.N:
                for(var i = 0; i < this.body.length; i++){
                    this.body[i].y += 1;
                }
                break;
            case DIR.E:
                for(var i = 0; i < this.body.length; i++){
                    this.body[i].y -= 1;
                }
                break;
        }
    };

    Snake.prototype.grow = function() {
        // body...
    };

    function init_snake(){
        //create a snake with length 4
        var height = h / unit_len - 4 ;
        var snake = new Snake();
        for (var i = 0; i < 4; i++){
            snake.body.push({x: 0, y: (height + i) });
        }
        snake.dir = 0;
        return snake;
    }
    
    function paint_square(x, y)
    {
        ctx.fillStyle = "black";
        ctx.fillRect(x*unit_len, y*unit_len, unit_len, unit_len);
        ctx.strokeStyle = "darkgray";
        ctx.strokeRect(x*unit_len, y*unit_len, unit_len, unit_len);
    }


    function paint(snake){
        var body = snake.body;
        ctx.fillStyle = "darkgray";
        ctx.fillRect(0,0,w,h);
        ctx.strokeStyle = "black";
        ctx.strokeRect(0, 0, w, h);
        for(var i = 0; i < body.length; i++)
        {
            var part = body[i];
           paint_square(part.x, part.y);
        }
    }

    var snake = init_snake();
    paint(snake);

})

