'use strict';

/**
 * smartTruncate - Smartly™ truncate a given string.
 *
 * @param  {String} string      A string with a minimum lenght of 4 chars.
 * @param  {Number} length      The length of the truncated result.
 * @param  {Number} [position]  The index of the ellipsis (zero based). Default is the end.
 * @return {String}             Return a truncated string w/ ellipsis.
 *
 * Example: smartTruncate('Steve Miller', 8) === 'Steve M…'.
 * Example: smartTruncate('Steve Miller', 9, 5) === 'Stev…ller'.
 */
var smartTruncate = function smartTruncate(string, length) {
    var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : length;

    var ellipsisOffset = 1;
    var minLength = 4;
    var str = string;

    if (typeof str === 'string') {
        str = str.trim();
    }

    var invalid = typeof str !== 'string' || str.length < minLength || typeof length !== 'number' || length <= minLength || length >= str.length - ellipsisOffset;

    if (invalid) return string;

    if (position >= length) {
        var _start = str.substring(0, length - ellipsisOffset);
        return _start + '\u2026';
    }

    var start = str.substring(0, position);
    var end = str.slice(position + ellipsisOffset - length);

    return start + '\u2026' + end;
};

module.exports = smartTruncate;
