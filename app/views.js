'use strict';

module.exports = {
    engines: { 'hbs': require('handlebars') },
    relativeTo: __dirname,
    path: './templates',
    layout: true,
    layoutPath: './templates/layout',
    partialsPath: './templates/partials',
    helpersPath: './templates/helpers'
};