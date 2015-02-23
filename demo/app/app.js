'use strict';

const React = require('react/addons');
const ReactStyles = require('../../index');
const { Hover, After, Before, Link, FirstLetter } = ReactStyles;
const styles = require('./styles');
const sx = require('../../src/stubs/sx');

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


            </div>
        );
    }

});


module.exports = App;
