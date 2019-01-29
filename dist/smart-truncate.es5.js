'use strict';

/**
 * smartTruncate - Smartly™ truncate a given string.
 *
 * @param  {String} string - A string with a minimum length of 4 chars.
 * @param  {Number} length - The length of the truncated result.
 * @param  {Object} [options]
 * @param  {(Number|String)} [options.position='right']
 *                         - The index of the ellipsis (zero based) or a string
 *                           indicating position: 'left', 'center', or 'right'.
 *                           Default is 'right'.
 * @param  {String} [options.mark = '…'] - The character[s] indicating omission.
 * @return {String} - Return a truncated string w/ ellipsis or a custom mark.
 *
 * Example: smartTruncate('Steve Miller', 8) === 'Steve M…'.
 * Example: smartTruncate('Steve Miller', 9, {position: 4}) === 'Stev…ller'.
 * Example: smartTruncate('Steve Miller', 7, {position: 'left'}) === '…Miller'.
 */
var smartTruncate = function smartTruncate(string, length) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref$mark = _ref.mark,
        mark = _ref$mark === undefined ? '\u2026' : _ref$mark,
        _ref$position = _ref.position,
        position = _ref$position === undefined ? 'right' : _ref$position;

    if (typeof mark !== 'string') return string;

    var markOffset = mark.length;
    var minLength = 4;

    var str = string;

    if (typeof str === 'string') {
        str = str.trim();
    }

    var invalid = typeof str !== 'string' || str.length < minLength || typeof length !== 'number' || length <= minLength || length >= str.length - markOffset;

    if (invalid) return string;

    if (position >= length - markOffset || position === 'right') {
        var _start = str.substring(0, length - markOffset);
        return '' + _start + mark;
    }

    if (position === 'left') {
        var _end = str.substring(str.length - (length - 1), str.length);
        return '' + mark + _end;
    }

    if (position === 'center') {
        var _start2 = str.substring(0, length / 2);
        var _end2 = str.substring(str.length - length / 2 + 1, str.length);
        return '' + _start2 + mark + _end2;
    }

    var start = str.substring(0, position);
    var end = str.slice(position + markOffset - length);

    return '' + start + mark + end;
};

module.exports = smartTruncate;
