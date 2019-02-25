var Main = (function() {
    var ctx;
    var width;
    var height;

    initGame = function() {
        var canvas = document.getElementById("myCanvas");
        ctx = canvas.getContext('2d');
        width = canvas.width;
        height = canvas.height;

        this.setTicker();
    };

    setTicker = function() {
        setTimeout(function() {
            this.drawHexagon();
            this.setTicker();
        }, this.getRandomInteger(1000));
    }

    drawHexagon = function(x = 0, y = 0, size = 0) {
        x = x == 0 ? this.getRandomInteger(width) : x;
        y = y == 0 ? this.getRandomInteger(height) : y;
        size = size == 0 ? this.getRandomInteger(width / 2) : size;

        ctx.fillStyle = "rgba(" + this.getRandomInteger(255) + ", " + this.getRandomInteger(255) + ", " + this.getRandomInteger(255) + ", " + Math.random(1) + ")";
        ctx.beginPath();
        ctx.moveTo(x, y - size/2);
        ctx.lineTo(x + (size /2), y - (size /4));
        ctx.lineTo(x + (size /2), y + (size /4));
        ctx.lineTo(x, y +(size /2));
        ctx.lineTo(x - (size /2), y + (size /4));
        ctx.lineTo(x - (size /2), y - (size /4));
        ctx.closePath();
        ctx.fill();
    };

    getRandomInteger = function(max) {
        return Math.floor(Math.random() * Math.floor(max));
    };

    return {
        init: function() {
            initGame();
        }
    }
})();

document.addEventListener('DOMContentLoaded', (event) => {
    Main.init();
});


