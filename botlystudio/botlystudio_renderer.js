'use strict';

var Renderer = Renderer || {};

Renderer.numSprites = 0,
    Renderer.sprites = [];
    Renderer.canvas = null;


Renderer.init = function () {
    Renderer.canvas = document.getElementById("display");
};

Renderer.renderSprites = function () {
    Renderer.canvas.getContext("2d").clearRect(0, 0, Renderer.canvas.width, Renderer.canvas.height);

    for (var i = 0; i < Renderer.sprites.length; i++) {
        Renderer.sprites[i].render();
    }
    return i;
};

Renderer.sprite = function (options) {

    var that = {};
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.x = 0;
    that.y = 0;
    that.image = options.image;
    that.scaleRatio = 1;

    that.render = function () {

        // Draw the animation
        that.context.drawImage(
		    that.image,
		    (that.x),
		    (that.y),
		    that.width * that.scaleRatio,
		    that.height * that.scaleRatio);
        return true;
    };

    that.getFrameWidth = function () {
        return that.width;
    };

    return that;
}



Renderer.spawnSprite = function(path) {

    var spriteIndex,
        spriteImg;

    // Create sprite sheet
    spriteImg = new Image();

    spriteImg.onload = function() {
        console.log("Loaded !");
    };


    spriteIndex = Renderer.sprites.length;

    // Create sprite
    Renderer.sprites[spriteIndex] = Renderer.sprite({
        context: Renderer.canvas.getContext("2d"),
        width: 1380,
        height: 1380,
        image: spriteImg,
    });


    Renderer.sprites[spriteIndex].x = 0;
    Renderer.sprites[spriteIndex].y = 0;
    Renderer.sprites[spriteIndex].scaleRatio = 1;

    // Load sprite sheet
    spriteImg.src = path;

    Renderer.renderSprites();
}



Renderer.setBackGround = function (path) {
    var canvasStyle = document.getElementById("display").style;
    canvasStyle.background = "#ffffff url('" + path + "') no-repeat center";
    canvasStyle.backgroundSize = "contain";
};


Renderer.moveSprite = function(id, x,y){
    Renderer.sprites[id].x = x;
    Renderer.sprites[id].y = y;

    Renderer.renderSprites();
}

Renderer.scaleSprite = function(id, scale){
    Renderer.sprites[id].scaleRatio = scale;

    Renderer.renderSprites();
}

Renderer.calculateAspectRatio = function (image) {
    canvas = Renderer.canvas;
    var imageAspectRatio = image.width / image.height;
    var canvasAspectRatio = canvas.width / canvas.height;
    var renderableHeight, renderableWidth, xStart, yStart;
    var AspectRatio = new Object();
    // If image's aspect ratio is less than canvas's we fit on height
    // and place the image centrally along width
    if(imageAspectRatio < canvasAspectRatio) {
        renderableHeight = canvas.height ;
        renderableWidth = image.width * (renderableHeight / image.height);
        xStart = (canvas.width - renderableWidth) / 2;
        yStart = 0;
    }

    // If image's aspect ratio is greater than canvas's we fit on width
    // and place the image centrally along height
    else if(imageAspectRatio > canvasAspectRatio) {
        renderableWidth = canvas.width;
        renderableHeight = image.height * (renderableWidth / image.width);
        xStart = 0;
        yStart = ( canvas.width  - renderableHeight) / 2;
    }

    //keep aspect ratio
    else {
        renderableHeight =  canvas.height ;
        renderableWidth = canvas.width;
        xStart = 0;
        yStart = 0;
    }
    AspectRatio.renderableHeight = renderableHeight;
    AspectRatio.renderableWidth = renderableWidth;
    AspectRatio.startX = xStart;
    AspectRatio.startY = yStart;
    return AspectRatio;
}