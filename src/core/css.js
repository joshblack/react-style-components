"use strict";

const parse = require('./parse');
const camelizeStyleName = require('../vendor/camelizeStyleName');
const assign = require('../stubs/Object.assign');

function css(statements) {
    let results = parse(statements);
    let rules = results.stylesheet.rules;

    return rules.reduce((styles, rule) => {
        let selector = rule.selectors;

        styles[selector] = styles[selector] ? styles[selector] : {};

        rule.declarations.forEach((declaration) => {
            let { property, value } = declaration;

            styles[selector] = assign(
                styles[selector],
                { [camelizeStyleName(property)]: value }
            );
        });

        return styles;
    }, {});
}

module.exports = css;
