'use strict';

const assign = require('./Object.assign');

function sx(css, classNames) {
    return !css
        ? {}
        : Object.keys(classNames)
            .filter((className) => classNames[className])
            .reduce((prev, className) => assign(prev, css[className]), {});
}

module.exports = sx;