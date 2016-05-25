'use strict';

const ReactDOMServer = require('react-dom/server');

const internals = {};

internals.renderHandlebarsView = (request, reply) => {

    return reply.view('handlebars-view.hbs');
};

internals.renderReactView = (request, reply) => {

    let reactHtml = '<p>React works !</p>';
    return reply.view('react-view.hbs', { body: reactHtml });
};

module.exports = [
    { method: 'GET', path: '/', handler: internals.renderReactView },
    { method: 'GET', path: '/handlebars-view', handler: internals.renderHandlebarsView },

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