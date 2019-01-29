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
const smartTruncate = (string, length,
    {
        mark = '\u2026', // ellipsis = …
        position = 'right',
    } = {}
) => {
    if (typeof mark !== 'string') return string;

    const markOffset = mark.length;
    const minLength = 4;

    let str = string;

    if (typeof str === 'string') {
        str = str.trim();
    }

    const invalid = typeof str !== 'string'
        || str.length < minLength
        || typeof length !== 'number'
        || length <= minLength
        || length >= (str.length - markOffset);

    if (invalid) return string;

    if (position >= (length - markOffset) || position === 'right') {
        const start = str.substring(0, length - markOffset);
        return `${start}${mark}`;
    }

    if (position === 'left') {
        const end = str.substring(str.length - (length - 1), str.length);
        return `${mark}${end}`;
    }

    if (position === 'center') {
        const start = str.substring(0, length / 2);
        const end = str.substring(str.length - (length / 2) + 1, str.length);
        return `${start}${mark}${end}`;
    }

    const start = str.substring(0, position);
    const end = str.slice((position + markOffset) - length);

    return `${start}${mark}${end}`;
}

module.exports = smartTruncate;
