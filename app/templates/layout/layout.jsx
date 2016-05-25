'use strict';

const React = require('react');
const Head = require('./head');
const Body = require('./body');

const Component = React.createClass({

    render: function () {

        return (
            <html lang="fr">
                <Head title={this.props.title} />
                <Body {...this.props} />
            </html>
        );
    }
});

module.exports = Component;