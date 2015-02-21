'use strict';

const React = require('react');

function stripQuotes(str) {
    return str.split('"').filter((s) => s !== "\"").join('');
}

const Before = React.createClass({
    render () {
        let content = this.props.style.content ? this.props.style.content : '';

        content = stripQuotes(content);

        return (

            <div style={ { position: 'relative' } }>
                <span style={ this.props.style }>{ content || '' }</span>
                {this.props.children}
            </div>

        );
    }
});

module.exports = Before;