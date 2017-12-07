//import * as es6Calc from './ES6/calculator';
import * as counter from './ES6/counter';

(function () {
    require("./style.css");

    var writeln = function(text) {
        var div = document.createElement('div');
        div.innerHTML = text;
        document.getElementById('content').appendChild(div);
    }

    writeln(require("./content"));

    // ---- end - calculator ----------
    var btnChangeBackground = document.getElementById('btnChangeBackground'),
        btnCommonJsCounter = document.getElementById('btnCommonJsCounter'),
        btnES6Counter = document.getElementById('btnES6Counter'),
        btnAMD = document.getElementById('btnAMD'),
        btnEnv = document.getElementById('btnEnv'),
        title = document.getElementById('title'),
        btnLoadImage = document.getElementById('btnLoadImage'),
        btnCommonJsCounterClickHandle = function () {
            require(['./CommonJS/counter', './Partial/btnChangeBackgroundHandle'], (common_counter, partial) => {
                common_counter.increment();
                console.log(common_counter.counter);
                title.innerHTML = partial.getText('CommonJs counter....');
                // ---- calculator - CommonJs ----------
                var calc = require('./CommonJS/calculator');
                writeln(calc.sum(3, 2));
                writeln(calc.subtract(3, 2));
            });
        },
        btnES6CounterClickHandle = function () {
            console.log(counter.counter); // 1
            counter.increment();
            console.log(counter.counter); // 2
            // ---- calculator - ES6 ----------
            writeln(es6Calc.sum(3, 2));
            writeln(es6Calc.subtract(3, 2));

        },
        btnAMDClickHandle = function () { // ---- calculator - AMD ----------
            require(['./AMD/calculator'], function (amdCalc) {
                console.log('AMD - sum(3, 2) = ' + amdCalc.sum(3, 2));
                console.log('AMD - subtract(3, 2) = ' + amdCalc.subtract(3, 2));
            });
        },
        btnChangeBackgroundClickHandle = function () {
            require(['./Partial/btnChangeBackgroundHandle'], (partial) => {
                var str = partial.getText('Change Background....');
                title.innerHTML = str;
            });
        },
        btnEnvClickHandle = function() {
            if (ENV === 'dev') {
                writeln('Development environment');
            } else {
                writeln('do not config environment');
            }
        },
        btnLoadImageClickHandle = function() {
            //require(['!!file-loader!./Asset/webpack_plugins1.gif'], function(img) {
            require(['url-loader?limit=10!./Asset/wp.gif'],
                function(img) {
                var content = document.getElementById('content'),
                    image = document.createElement('img');
                image.setAttribute('src', img);
                content.appendChild(image);
            });
        };

    btnChangeBackground.addEventListener('click', btnChangeBackgroundClickHandle);
    btnCommonJsCounter.addEventListener('click', btnCommonJsCounterClickHandle);
    btnES6Counter.addEventListener('click', btnES6CounterClickHandle);
    btnAMD.addEventListener('click', btnAMDClickHandle);
    btnEnv.addEventListener('click', btnEnvClickHandle);
    btnLoadImage.addEventListener('click', btnLoadImageClickHandle);

})();
