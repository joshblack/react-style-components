'use strict';

const React = require('react/addons');
const sxw = require('../stubs/sxw');

const FirstLetter = React.createClass({

  render () {
    const text = this.props.children.split(''),
          firstLetterStyle = this.props.style['p::first-letter'],
          style = sxw(this.props.style, ['p::first-letter']);

    return (
      <p style={style}>
        <span style={firstLetterStyle}>{text.shift()}</span>
        {text.join('')}
      </p>
    );
  }

});

module.exports = FirstLetter;
