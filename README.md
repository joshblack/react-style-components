WIP. Move Along!

# React Style Components

React Components for Styling Elements.

## Supported Components

### Pseudo-classes

#### `hover` pseudo-element

Generic hover styles for any element

#### Link-related pseudo class selectors

- `:link`
- `:visited`
- `:hover`
- `:active`

#### Text-related pseudo class selectors / elements

- `:first-letter`
- `::first-line`

### Content-related pseudo "elements"

#### `::before`

#### `::after`

### Position/Number-based pseudo class selectors

_TODO_

_Most likely we'll have to use `React.Children` methods in these selectors alongside `Array.prototype` methods_

- `:first-child`
- `:last-child`
- `:nth-child(N)`
- `:nth-oth-type(N)`
- `:first-of-type`
- `:last-of-type`
- `:nth-last-of-type(N)`
- `:nth-last-child(N)`
- `:only-of-type`

### Relational pseudo class selectors

_TODO_

- `:not(S)`
  - Can implement using `Array.prototype.filter`
- `:empty`
  - Can implement using `Array.prototype.filter`

### Input & link related pseudo class selectors

_TODO_

- `:focus`
- `:target`
- `:enabled`
- `:disabled`
- `:checked`
- `:indeterminate`

##### TODO:

- Figure out how to handle the cascade, do users "opt-in" to default styles? Or must they be specific on everything?
