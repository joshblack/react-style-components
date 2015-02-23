'use strict';

const css = require('../../src/core/css');

var hoverExampleStyles = `
    .app {
        background: black;
        color: white;
        padding: 15px;
        transition: 0.2s all;
    }

    .app:hover {
        background: blue;
        cursor: pointer;
    }
`;

exports.hoverStyles = css(hoverExampleStyles);

var afterExampleStyles = `
    .star-six {
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-bottom: 100px solid red;
        position: relative;
        display: inline-block;
        margin-bottom: 45px;
    }

    .star-six::after {
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-top: 100px solid tomato;
        position: absolute;
        content: "after";
        top: 25px;
        left: 0px;
    }
`;

exports.afterStyles = css(afterExampleStyles);

var beforeExampleStyles = `
    .star-six {
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-bottom: 100px solid red;
        position: relative;
        display: inline-block;
        margin-bottom: 45px;
    }

    .star-six::before {
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-top: 100px solid tomato;
        position: absolute;
        content: "before";
        top: 25px;
        left: 0px;
    }
`;

exports.beforeStyles = css(beforeExampleStyles);

var linkExampleStyles = `
    a:link {
        color: blue;
        text-decoration: underline;
        font-size: 32px;
    }

    a:visited {
        color: purple;
    }

    a:active {
        color: lime;
    }

    a:hover {
        color: magenta;
        transition: 0.2s all;
    }
`;

exports.linkStyles = css(linkExampleStyles);

var firstLetterExampleStyles = `
    p::first-letter {
        font-size: 32px;
        color: magenta;
    }
`;

exports.firstLetterStyles = css(firstLetterExampleStyles);

var firstChildExampleStyles = `
  ul {
    list-style: circle;
  }

  ul:first-child {
    font-size: 32px;
  }
`;

exports.firstChildStyles = css(firstChildExampleStyles);

var lastChildExampleStyles = `
  ul {
    list-style: circle;
  }

  ul:last-child {
    font-size: 32px;
  }
`;

exports.lastChildStyles = css(lastChildExampleStyles);
