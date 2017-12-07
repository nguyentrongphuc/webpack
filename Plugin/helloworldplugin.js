function HelloWorldPlugin(option) {

}

HelloWorldPlugin.prototype.apply = function (compiler) {
    compiler.plugin('done', function() {
        console.log('Hello World! Plugin')
    });

    compiler.plugin('compilation', function(compilation) {
        compilation.plugin('optimize', function() {
            console.log('Assets are being optimize.');
        });
    });
};

module.exports = HelloWorldPlugin;
