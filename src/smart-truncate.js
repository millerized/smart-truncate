/**
 * smartTruncate - Smartly™ truncate a given string.
 *
 * @param  {String} string - A string with a minimum lenght of 4 chars.
 * @param  {Number} length - The length of the truncated result.
 * @param  {Object} [options]
 * @param  {Number} [options.position] - The index of the ellipsis (zero based).
 *                                      Default is the end.
 * @param  {String} [options.mark = '…'] - The character[s] indicating omission.
 * @return {String} - Return a truncated string w/ ellipsis.
 *
 * Example: smartTruncate('Steve Miller', 8) === 'Steve M…'.
 * Example: smartTruncate('Steve Miller', 9, 4) === 'Stev…ller'.
 */
const smartTruncate = (string, length,
    {
        mark = '\u2026', // ellipsis = …
        position = (length - 1),
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

    if (position >= (length - markOffset)) {
        const start = str.substring(0, length - markOffset);
        return `${start}${mark}`;
    }

    const start = str.substring(0, position);
    const end = str.slice((position + markOffset) - length);

    return `${start}${mark}${end}`;
}

module.exports = smartTruncate;
