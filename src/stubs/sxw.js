'use strict';

const assign = require('./Object.assign');

function sxw(css, exceptions) {
    return Object.keys(css)
        .filter((property) => {
            return exceptions.indexOf(property) === -1;
        })
        .reduce((prev, property) => assign(prev, css[property]), {});
}

module.exports = sxw;
