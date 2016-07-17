function GruntConfig(grunt) {
    grunt.initConfig({
        express: {
            server: {
                options: {
                    port: '3000',
                    bases: ['dist'],
                }
            }
        },
        protractor: {
            run: {
                options: {
                    keepAlive: false,
                    debug: false,
                     args:{
                         baseUrl: 'http://localhost:3000/#' 
                     }
                },
                configFile: "features/config/local-conf.js",
            },
            debug: {
                options: {
                    keepAlive: true,
                    debug: true,
                     args:{
                         baseUrl: 'http://localhost:3000/#' 
                     }
                },
                configFile: "features/config/local-conf.js",
            },
            'run-sauce': {
                options: {
                    keepAlive: false,
                    debug: false,
                     args:{
                         baseUrl: 'http://localhost:3000/#' 
                     }
                },
                configFile: "features/config/saucelabs-conf.js",
            },
            'debug-sauce': {
                options: {
                    keepAlive: true,
                    debug: true,
                     args:{
                         baseUrl: 'http://localhost:3000/#' 
                     }
                },
                configFile: "features/config/saucelabs-conf.js",
            }
        }
    });

    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.registerTask('start-server', ['express', 'express-keepalive']);

    grunt.registerTask('default', [
        'express',
        'protractor:run']);
    grunt.registerTask('debug', [
        'express', 
        'protractor:debug']);

    grunt.registerTask('sauce', [
        'express',
        'protractor:run-sauce']);
    grunt.registerTask('sauce-debug', [
        'express', 
        'protractor:debug-sauce']);

}

module.exports = GruntConfig;
