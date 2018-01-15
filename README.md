Smart Truncate [![npm version](https://badge.fury.io/js/smart-truncate.svg)](https://badge.fury.io/js/smart-truncate) [![Build Status](https://travis-ci.org/millerized/smart-truncate.svg?branch=master)](https://travis-ci.org/millerized/smart-truncate) [![Coverage Status](https://coveralls.io/repos/github/millerized/smart-truncate/badge.svg?branch=master)](https://coveralls.io/github/millerized/smart-truncate?branch=master) ![size](http://img.badgesize.io/https://unpkg.com/smart-truncate@1.0.1/dist/smart-truncate.es5.js?label=size) ![gzip size](http://img.badgesize.io/https://unpkg.com/smart-truncate@1.0.1/dist/smart-truncate.es5.js?label=gzip%20size&compression=gzip)
=========

A small library that truncates a string. It can insert or append an ellipsis (or a custom mark) at any desired position of the truncated result.

## Installation

```bash
# With yarn.
yarn add smart-truncate;

# With npm.
npm install --save smart-truncate;
```

## Syntax
```js
smartTruncate(string, length[, options])
```
#### Paramaters
>**_string_**<br>
&emsp;A string with a minimum length of 4 characters.

>**_length_**<br>
&emsp;The length of the truncated result.

>**_options_**<br>
>**_options.position_**<br>
&emsp;Optional. The index of the ellipsis (zero based). Default is at the end.<br>
>**_options.mark_**<br>
&emsp;Optional. The character[s] indicating omission. Default is an ellipsis "…".

#### Return value
>A new string truncated with an ellipsis or custom mark.

## Usage
```js
const smartTruncate = require('smart-truncate');

const string = 'To iterate is human, to recurse divine.';

// Append an ellipsis at the end of the truncated string.
const truncated = smartTruncate(string, 15);
```

**Output**: `"To iterate is …"`

***

```js
const string = 'To iterate is human, to recurse divine.';

// Insert an ellipsis in the middle of a smart truncated string.
const truncated = smartTruncate(string, 21, {position: 10});
```

**Output**: `"To iterate…se divine."`

***

```js
const files = [
    '1Password 6.app',
    'Adobe',
    'Adobe Creative Cloud',
    'Adobe Illustrator CC 2015.3',
    'Adobe Photoshop CC 2014',
    'Adobe Photoshop CC 2015.5',
    'App Store.app'
];

const truncated = files.map((filename) => smartTruncate(filename, 21, {position: 10}));
```

**Output**:
```js
[
    '1Password 6.app',
    'Adobe',
    'Adobe Creative Cloud',
    'Adobe Illu… CC 2015.3',
    'Adobe Phot…op CC 2014',
    'Adobe Phot… CC 2015.5',
    'App Store.app'
]
```

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add tests for any new or changed functionality. Lint and test your code.
