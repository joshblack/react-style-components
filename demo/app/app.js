'use strict';

const React = require('react/addons');
const ReactStyles = require('../../index');
const { Hover, After, Before, Link, FirstLetter } = ReactStyles;
const styles = require('./styles');
const sx = require('../../src/stubs/sx');
const sxw = require('../../src/stubs/sxw');

const HoverExample = React.createClass({
    mixins: [Hover],

    getDefaultProps () {
        return { styles: styles.hoverStyles }
    },

    render () {
        let style = sx(this.props.styles, {
            '.app': true,
            '.app:hover': this.state.hover
        });

        return (
            <div ref="hover" style={style}>Hello World!</div>
        );
    }
});

const AfterExample = React.createClass({

    getDefaultProps () {
        return { styles: styles.afterStyles }
    },

    render () {
        const afterStyle = this.props.styles['.star-six::after'],
              style = this.props.styles['.star-six'];

        return (
            <After style={ afterStyle }>
                <span style={ style }></span>
            </After>
        );
    }
});

const BeforeExample = React.createClass({

    getDefaultProps () {
        return { styles: styles.beforeStyles }
    },

    render () {
        const beforeStyle = this.props.styles['.star-six::before'],
              style = this.props.styles['.star-six'];

        return (
            <Before style={ beforeStyle }>
                <span style={ style }></span>
            </Before>
        );
    }
});

const LinkExample = React.createClass({
    getDefaultProps () {
        return { style: styles.linkStyles }
    },

    render () {
        return (
            <p>This is an example of a <Link style={this.props.style} href="#">:link</Link> pseudo-class selector</p>
        )
    }
});

const FirstLetterExample = React.createClass({
    getDefaultProps () {
        return { style: styles.firstLetterStyles }
    },

    render () {
        return (
            <FirstLetter style={this.props.style}>
                  Check out the first letter
            </FirstLetter>
        );
    }
});

const FirstChildExample = React.createClass({
  getDefaultProps () {
    return {
      style: styles.firstChildStyles
    }
  },

  render () {
    let style = sxw(this.props.style, ['ul:first-child']);

    return (
      <ul style={style}>
        <li style={this.props.style['ul:first-child']}>Item #1</li>
        <li>Item #2</li>
        <li>Item #3</li>
        <li>Item #4</li>
        <li>Item #5</li>
      </ul>
    );
  }
});

const LastChildExample = React.createClass({
  getDefaultProps () {
    return {
      style: styles.lastChildStyles
    }
  },

  render () {
    let style = sxw(this.props.style, ['ul:last-child']);

    return (
      <ul style={style}>
        <li>Item #1</li>
        <li>Item #2</li>
        <li>Item #3</li>
        <li>Item #4</li>
        <li style={this.props.style['ul:last-child']}>Item #5</li>
      </ul>
    );
  }
});

const App = React.createClass({
    render () {
        return (
            <div>
                <h1>Pseudo Classes</h1>

                <h3>Hover Example</h3>
                <HoverExample/>

                <h3>Link-related selectors</h3>
                <LinkExample/>

                <h3>Text-related pseudo class selectors/elements</h3>
                <h4><code>::first-letter</code></h4>
                <FirstLetterExample/>

                <h4><code>::first-line</code></h4>

                <h1>Pseudo Elements</h1>
                <h3><code>::before</code></h3>
                <BeforeExample/>
                <h3><code>::after</code></h3>
                <AfterExample/>

                <h1>Position/Number-based pseudo class selectors</h1>
                <h3><code>:first-child</code></h3>
                <FirstChildExample/>

                <h1>Position/Number-based pseudo class selectors</h1>
                <h3><code>:last-child</code></h3>
                <LastChildExample/>

            </div>
        );
    }

});


module.exports = App;
