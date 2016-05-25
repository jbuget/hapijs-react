'use strict';

const Path = require('path');
const Hapi = require('hapi');
const Good = require('good');
const Hoek = require('hoek');
const Blipp = require('blipp');
const Inert = require('inert');
const Vision = require('vision');
const Views = require('./views');
const Routes = require('./routes');

require('babel-core/register')({
    presets: ['react', 'es2015']
});

const server = new Hapi.Server();

const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3000;
server.connection({ port: port });

server.register([
    Blipp,
    Inert,
    Vision,
    {
        register: Good,
        options: {
            reporters: {
                console: [{
                    module: 'good-squeeze',
                    name: 'Squeeze',
                    args: [{
                        response: '*',
                        log: '*'
                    }]
                }, {
                    module: 'good-console'
                }, 'stdout']
            }
        }
    }
], (err) => {

    Hoek.assert(!err, err);

    server.views(Views);
    server.route(Routes);

    server.start((err) => {

        console.log('  _   _             _   ____                 _   ');
        console.log(' | | | | __ _ _ __ (_) |  _ \\ ___  __ _  ___| |_ ');
        console.log(' | |_| |/ _` | \'_ \\| | | |_) / _ \\/ _` |/ __| __|');
        console.log(' |  _  | (_| | |_) | | |  _ <  __/ (_| | (__| |_ ');
        console.log(' |_| |_|\\__,_| .__/|_| |_| \\_\\___|\\__,_|\\___|\\__|');
        console.log('             |_|                                 ');

        Hoek.assert(!err, err);
        console.log('Server running at:', server.info.uri);
    });
});