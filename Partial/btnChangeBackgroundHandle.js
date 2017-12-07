(function () {

    var self = {};

    self.getText = function (message) {
        document.body.style.background = "green";
        return message || "It works from partial.js"
    }

    module.exports = self;
})();
