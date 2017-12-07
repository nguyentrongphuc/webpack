// var counter = 1;

// function increment() {
//   counter++;
// }

// function decrement() {
//   counter--;
// }

// module.exports = {
//   counter: counter,
//   increment: increment,
//   decrement: decrement
// };


(function () {

    var self = {
        counter: 1
    };

    self.increment = function () {
        self.counter++;
    }

    self.decrement = function () {
        self.counter--;
    }

    module.exports = self;
})();
