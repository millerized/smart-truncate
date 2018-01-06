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
 * Example: smartTruncate('Steve Miller', 9, 4) === 'Stev…ller'.
 */
var smartTruncate = function smartTruncate(string, length) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref$mark = _ref.mark,
        mark = _ref$mark === undefined ? '\u2026' : _ref$mark,
        _ref$position = _ref.position,
        position = _ref$position === undefined ? length : _ref$position;

    if (typeof mark !== 'string') return string;

    var markOffset = mark.length;
    var minLength = 4;

    var str = string;

    if (typeof str === 'string') {
        str = str.trim();
    }

    var invalid = typeof str !== 'string' || str.length < minLength || typeof length !== 'number' || length <= minLength || length >= str.length - markOffset;

    if (invalid) return string;

    if (position >= length - markOffset) {
        var _start = str.substring(0, length - markOffset);
        return '' + _start + mark;
    }

    var start = str.substring(0, position);
    var end = str.slice(position + markOffset - length);

    return '' + start + mark + end;
};

module.exports = smartTruncate;
