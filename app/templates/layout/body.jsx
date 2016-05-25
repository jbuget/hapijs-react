'use strict';

const React = require('react');
const Header = require('./header');
const Footer = require('./footer');
const GoogleAnalytics = require('./analytics');

const Component = React.createClass({

    render: function () {

        return (
            <body>

                <Header />

                <main>
                  {this.props.children}
                </main>

                <Footer />

                <GoogleAnalytics />

            </body>
        );
    }
});


module.exports = Component;