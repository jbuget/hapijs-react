'use strict';

const Path = require('path');
const Hapi = require('hapi');
const Good = require('good');
const Hoek = require('hoek');
const Vision = require('vision');

require('babel-core/register')({
    presets: ['react', 'es2015']
});

const server = new Hapi.Server();

const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3000;
server.connection({ port: port });

server.register([
    require('inert'),
    require('vision'),
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

    server.views({
        engines: {
            'jsx': require('hapi-react-views')
        },
        relativeTo: Path.resolve(__dirname, 'app'),
        path: 'views'
    });

    server.route({
        method: 'GET',
        path: '/server-side-react-component',
        handler: (request, reply) => reply.view('server-side-react-component.jsx')
    });

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: 'public',
                listing: true
            }
        }
    });

    server.start((err) => {

        Hoek.assert(!err, err);
        console.log('Server running at:', server.info.uri);
    });
});