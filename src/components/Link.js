'use strict';

const React = require('react');
const Hover = require('./Hover');
const assign = require('../stubs/Object.assign');
const css = require('../core/css');
const sx = require('../src/stubs/sx');

const Link = React.createClass({

    mixins: [Hover],

    propTypes () {
        return {
            href: React.PropTypes.string.isRequired,
            style: React.PropTypes.object
        }
    },

    getInitialState () {
        return {
            active: false,
            visited: false
        }
    },

    getDefaultProps () {
        return { state: {} }
    },

    handleOnMouseDown () {
        this.setState({
            active: true,
            hover: false,
            visited: false
        });
    },

    handleOnMouseUp () {
        this.setState({
            active: false,
            visited: true
        });
    },

    render () {
        // Note the cascade of classes, unless we explicity manage state
        let style = sx(this.props.style, {
            'a:link': true,
            'a:active': this.state.active,
            'a:visited': this.state.visited,
            'a:hover': this.state.hover
        });

        return (
            <a ref="hover"
               href={this.props.href}
               style={style}
               onMouseDown={this.handleOnMouseDown}
               onMouseUp={this.handleOnMouseUp}>
               {this.props.children}
            </a>
        );
    }
});

module.exports = Link;
