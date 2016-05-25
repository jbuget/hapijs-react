'use strict';

const internals = {};

internals.renderReactView = (request, reply) => {

    return reply.view('views/home', { title: 'Home Page' });
};

module.exports = [
    { method: 'GET', path: '/', handler: internals.renderReactView },

    // Static assets
    {
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: 'public',
                listing: true
            }
        }
    }
];