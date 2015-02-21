'use strict';

const React = require('react');

function stripQuotes(str) {
    return str.split('"').filter((s) => s !== "\"").join('');
}

const After = React.createClass({
    render () {
        let content = this.props.style.content ? this.props.style.content : '';

        content = stripQuotes(content);

        return (

            <div style={ { position: 'relative' } }>
                {this.props.children}
                <span style={ this.props.style }>{ content || '' }</span>
            </div>

        );
    }
});

module.exports = After;