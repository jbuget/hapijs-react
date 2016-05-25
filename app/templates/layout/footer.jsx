require.ensure(['react', 'react-dom'], (require) => {

    const React = require('react');
    const ReactDOM = require('react-dom');

    ReactDOM.render(
        <h1>Footer</h1>,
        document.getElementById('app-footer')
    );
});

