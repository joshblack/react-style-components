'use strict';

const invariant = require('../vendor/invariant.js');

const Hover = {
    getInitialState () {
        return { hover: false }
    },

    handleOnMouseOver () {
        this.setState({ hover: true });
    },

    handleOnMouseOut () {
        this.setState({ hover: false });
    },

    componentDidMount () {
        invariant(
            this.refs.hover,
            'The Hover Style Mixin requires a hoverElement ref on the component in order to apply the proper styling.'
        );

        this.refs.hover.getDOMNode().addEventListener('mouseover', this.handleOnMouseOver);
        this.refs.hover.getDOMNode().addEventListener('mouseout', this.handleOnMouseOut);
    },

    componentWillUnmount () {
        this.refs.hover.getDOMNode().removeEventListener('mouseover', this.handleOnMouseOver);
        this.refs.hover.getDOMNode().removeEventListener('mouseout', this.handleOnMouseOut);
    },
}

module.exports = Hover;
