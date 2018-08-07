'use strict';

goog.provide('renderer');
goog.require('tree')

var Renderer = Renderer || {};



Renderer.HEIGHT = 400;
Renderer.WIDTH = 400;

/**
 * PID of animation task currently executing.
 * @type !Array.<number>
 */
Renderer.pidList = [];

Renderer.pause = 10;

Renderer.visible = true;

/**
 * Arduino interpreter for executing program.
 * @type Interpreter
 */
Renderer.interpreter = null;


/** Initialize function for Renderer */
Renderer.init = function () {

    var visualization = document.getElementById('visualization');


    Renderer.ctxDisplay = document.getElementById('display').getContext('2d');
    Renderer.ctxScratch = document.getElementById('scratch').getContext('2d');
    Renderer.reset();

    setTimeout(Renderer.importInterpreter, 1);
    // Lazy-load the syntax-highlighting.

    var sliderSvg = document.getElementById('slider');
    Renderer.speedSlider = new Slider(10, 35, 130, sliderSvg);
};





/**
 * Load the JavaScript interperter.
 */
Renderer.importInterpreter = function () {
    //<script type="text/javascript"
    //  src="third-party/JS-Interpreter/compiled.js"></script>
    // var script = document.createElement('script');
    // script.setAttribute('type', 'text/javascript');
    // script.setAttribute('src', 'JS-Interpreter/compiled.js');
    // document.head.appendChild(script);
};


/**
 * Reset the turtle to the start position, clear the display, and kill any
 * pending tasks.
 */
Renderer.reset = function () {
    // Starting location and heading of the turtle.
    Renderer.x = Renderer.WIDTH / 2;
    Renderer.y = Renderer.HEIGHT / 2;
    Renderer.heading = 0;
    Renderer.penDownValue = true;
    Renderer.visible = true;

    // Clear the canvas.
    Renderer.ctxScratch.canvas.width = Renderer.ctxScratch.canvas.width;
    Renderer.ctxScratch.strokeStyle = '#525252';
    Renderer.ctxScratch.fillStyle = '#525252';
    Renderer.ctxScratch.lineWidth = 3;
    Renderer.ctxScratch.lineCap = 'round';
    Renderer.ctxScratch.font = 'normal 18pt Arial';
    Renderer.display();

    // Kill all tasks.
    for (var i = 0; i < Renderer.pidList.length; i++) {
        window.clearTimeout(Renderer.pidList[i]);
    }
    Renderer.pidList.length = 0;
    Renderer.interpreter = null;
};

/**
 * Copy the scratch canvas to the display canvas. Add a turtle marker.
 */
Renderer.display = function () {
    // Clear the display with black.
    Renderer.ctxDisplay.beginPath();
    Renderer.ctxDisplay.rect(0, 0,
        Renderer.ctxDisplay.canvas.width, Renderer.ctxDisplay.canvas.height);
    Renderer.ctxDisplay.fillStyle = '#F2F2F2';
    Renderer.ctxDisplay.fill();

    // Draw the user layer.
    Renderer.ctxDisplay.globalCompositeOperation = 'source-over';
    Renderer.ctxDisplay.drawImage(Renderer.ctxScratch.canvas, 0, 0);
};


/**
 * Click the run button.  Start the program.
 * @param {!Event} e Mouse or touch event.
 */
Renderer.runButtonClick = function (e) {
    /*if (Renderer.eventSpam(e)) {
      return;
    }
    */
    Renderer.execute();
};

/**
 * Click the reset button.  Reset the Renderer.
 * @param {!Event} e Mouse or touch event.
 */
Renderer.resetButtonClick = function (e) {
    /*if (Renderer.eventSpam(e)) {
      return;
    }
    */
    Renderer.reset();
};


/**
 * Inject the Renderer API into a JavaScript interpreter.
 * @param {!Interpreter} interpreter The JS Interpreter.
 * @param {!Interpreter.Object} scope Global scope.
 */
Renderer.initInterpreter = function (interpreter, scope) {
    // API
    var wrapper;
    wrapper = function () {
        console.log("Not implemented");
    };
    interpreter.setProperty(scope, 'Avancer',
        interpreter.createNativeFunction(wrapper));

    wrapper = function () {
        console.log("Not implemented");
    };
    interpreter.setProperty(scope, 'Reculer',
        interpreter.createNativeFunction(wrapper));

    wrapper = function () {
        console.log("Not implemented");
    };
    interpreter.setProperty(scope, 'droite',
        interpreter.createNativeFunction(wrapper));

    wrapper = function () {
        console.log("Not implemented");
    };
    interpreter.setProperty(scope, 'gauche',
        interpreter.createNativeFunction(wrapper));

    wrapper = function () {
        console.log("Not implemented");
    };
    interpreter.setProperty(scope, 'Lever',
        interpreter.createNativeFunction(wrapper));
        
    wrapper = function () {
        console.log("Not implemented");
    };
    interpreter.setProperty(scope, 'Descendre',
        interpreter.createNativeFunction(wrapper));

    wrapper = function () {
        console.log("Not implemented");
    };
    interpreter.setProperty(scope, 'turnGo',
        interpreter.createNativeFunction(wrapper));

    wrapper = function () {
        console.log("Not implemented");
    };
    interpreter.setProperty(scope, 'penWidth',
        interpreter.createNativeFunction(wrapper));

    wrapper = function () {
        console.log("Not implemented");
    };
    interpreter.setProperty(scope, 'penColour',
        interpreter.createNativeFunction(wrapper));

    wrapper = function () {
        console.log("Not implemented");
    };
    interpreter.setProperty(scope, 'hideTurtle',
        interpreter.createNativeFunction(wrapper));
    wrapper = function () {
        console.log("Not implemented");
    };
    interpreter.setProperty(scope, 'showTurtle',
        interpreter.createNativeFunction(wrapper));

    wrapper = function () {
        console.log("Not implemented");
    };
    interpreter.setProperty(scope, 'print',
        interpreter.createNativeFunction(wrapper));

    wrapper = function () {
        console.log("Not implemented");
    };
    interpreter.setProperty(scope, 'font',
        interpreter.createNativeFunction(wrapper));

    wrapper = function () {
        console.log("Not implemented");
    };
    interpreter.setProperty(scope, 'none',
        interpreter.createNativeFunction(wrapper));
};


/**
 * Execute the user's code.  Heaven help us...
 */
Renderer.execute = function () {
    if (!('Interpreter' in window)) {
        // Interpreter lazy loads and hasn't arrived yet.  Try again later.
        setTimeout(Renderer.execute, 250);
        return;
    }

    Renderer.reset();
    Blockly.selected && Blockly.selected.unselect();
    var code = BotlyStudio.generateJavaScript();
    Renderer.interpreter = new Interpreter(code, Renderer.initInterpreter);
    Renderer.pidList.push(setTimeout(Renderer.executeChunk_, 100));
};

Renderer.map = function (x, in_min, in_max, out_min, out_max) {
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};


/**
 * Execute a bite-sized chunk of the user's code.
 * @private
 */
Renderer.executeChunk_ = function () {
    // All tasks should be complete now.  Clean up the PID list.
    Renderer.pidList.length = 0;
    var stepSpeed = Renderer.speedSlider.getValue();
    Renderer.pause = Renderer.map(stepSpeed, 0, 1, 20, 0) + 1;
    var go;
    do {
        try {
            go = Renderer.interpreter.step();
        } catch (e) {
            // User error, terminate in shame.
            alert(e);
            go = false;
        }
        if (go && Renderer.pause) {
            // The last executed command requested a pause.
            go = false;
            Renderer.pidList.push(
                setTimeout(Renderer.executeChunk_, Renderer.pause));
        }
    } while (go);
    // Wrap up if complete.
    if (!Renderer.pause) {
        BotlyStudio.workspace.highlightBlock(null);
        // Image complete; allow the user to submit this image to Reddit.
        Renderer.canSubmit = true;
    }
};



/**
 * Highlight a block and pause.
 * @param {string=} id ID of block.
 */
Renderer.animate = function (id) {
    Renderer.display();
    if (id) {
        BotlyStudio.workspace.highlightBlock(null);
        // Scale the speed non-linearly, to give better precision at the fast end.
        var stepSpeed = 1000 * Math.pow(1 - Renderer.speedSlider.getValue(), 2);
        Renderer.pause = Math.max(1, stepSpeed);
    }
};


/**
 * Print some text.
 * @param {string} text Text to print.
 * @param {string=} id ID of block.
 */
Renderer.drawPrint = function (text, id) {
    Renderer.ctxScratch.save();
    Renderer.ctxScratch.translate(Renderer.x, Renderer.y);
    Renderer.ctxScratch.rotate(2 * Math.PI * (Renderer.heading - 90) / 360);
    Renderer.ctxScratch.fillText(text, 0, 0);
    Renderer.ctxScratch.restore();
    Renderer.animate(id);
};

/**
 * Change the typeface of printed text.
 * @param {string} font Font name (e.g. 'Arial').
 * @param {number} size Font size (e.g. 18).
 * @param {string} style Font style (e.g. 'italic').
 * @param {string=} id ID of block.
 */
Renderer.drawFont = function (font, size, style, id) {
    Renderer.ctxScratch.font = style + ' ' + size + 'pt ' + font;
    Renderer.animate(id);
};



/**
 * Determine if this event is unwanted.
 * @param {!Event} e Mouse or touch event.
 * @return {boolean} True if spam.
 */
Renderer.eventSpam = function (e) {
    // Touch screens can generate 'touchend' followed shortly thereafter by
    // 'click'.  For now, just look for this very specific combination.
    // Some devices have both mice and touch, but assume the two won't occur
    // within two seconds of each other.
    var touchMouseTime = 2000;
    if (e.type == 'click' &&
        Renderer.eventSpam.previousType_ == 'touchend' &&
        Renderer.eventSpam.previousDate_ + touchMouseTime > Date.now()) {
        e.preventDefault();
        e.stopPropagation();
        return true;
    }
    // Users double-click or double-tap accidentally.
    var doubleClickTime = 400;
    if (Renderer.eventSpam.previousType_ == e.type &&
        Renderer.eventSpam.previousDate_ + doubleClickTime > Date.now()) {
        e.preventDefault();
        e.stopPropagation();
        return true;
    }
    Renderer.eventSpam.previousType_ = e.type;
    Renderer.eventSpam.previousDate_ = Date.now();
    return false;
};

Renderer.eventSpam.previousType_ = null;
Renderer.eventSpam.previousDate_ = 0;


























