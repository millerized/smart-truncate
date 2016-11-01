Smart Truncate [![Build Status](https://travis-ci.org/millerized/smart-truncate.svg?branch=master)](https://travis-ci.org/millerized/smart-truncate) [![Coverage Status](https://coveralls.io/repos/github/millerized/smart-truncate/badge.svg?branch=master)](https://coveralls.io/github/millerized/smart-truncate?branch=master)
=========

A small library that truncates a string. It can insert or append an ellipsis at any desired position of the truncated result.

## Installation

  `npm install smart-truncate`

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
const truncated = smartTruncate(string, 21, 10);
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

const truncated = files.map((filename) => smartTruncate(filename, 21, 10));
```

**Output**:
```json
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

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
