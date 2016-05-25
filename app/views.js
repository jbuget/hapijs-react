'use strict';

const Path = require('path');
const HapiReactViews = require('hapi-react-views');

module.exports = {
    engines: {
        'jsx': HapiReactViews
    },
    relativeTo: __dirname,
    path: './templates',
    compileOptions: {
        renderMethod: 'renderToString',
        layoutPath: Path.join(__dirname, 'templates/layout'),
        layout: 'layout'
    }
};