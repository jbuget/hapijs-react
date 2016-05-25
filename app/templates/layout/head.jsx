'use strict';

const React = require('react');

const Component = React.createClass({

    render: function () {

        return (
            <head>
                <meta charset="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>

                <title>{this.props.title}</title>

                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="apple-touch-icon" href="apple-touch-icon.png"/>
                <link rel="alternate" href="/feed.xml" title={this.props.title} type="application/atom+xml"/>

                <script src="/build/vendor.bundle.js"></script>
                <script src="/build/app.bundle.js"></script>

                {this.props.children}
            </head>
        );
    }
});


module.exports = Component;