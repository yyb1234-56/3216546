(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
    document.getElementById('go').addEventListener('click', start);
    
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('Happy'))
        .then(() => engine.shake())
        .then(() => engine.toText('WomensDay'))
        .then(() => engine.shake())
        .then(() => engine.toText('To'))
        .then(() => engine.shake())
        .then(() => engine.toText('HuiHui'))
        .then(() => engine.shake())
        .then(() => engine.toText('hahahaha(-^_^-)'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
