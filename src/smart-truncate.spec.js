'use strict';

const smartTruncate = require('./smart-truncate');
const {expect} = require('chai');

describe('smartTruncate(string, length[, position])', () => {
    it('should return a smart truncated string w/ an ellipsis at the 4th index position of the given string', () => {
        expect(smartTruncate('Steve Miller', 9, 4)).to.equal('Stev…ller');
    });

    it('should assert that the length of the truncated string is equal to the given length w/ an ellipsis at the 4th index position', () => {
        const length = 9;
        const truncated = smartTruncate('Steve Miller', length, 4);
        expect(truncated.length).to.equal(length);
    });

    it('should append an ellipsis to the end of the truncated string (default) when given an undefined position', () => {
        expect(smartTruncate('Steve Miller', 8)).to.equal('Steve M…');
    });

    it('should assert that the length of the truncated string is equal to the given length w/ an ellipsis at the default end of the string', () => {
        const length = 8;
        const truncated = smartTruncate('Steve Miller', length);
        expect(truncated.length).to.equal(length);
    });

    it('should return a smart truncated string w/ an ellipsis at the 5th index position of the given string', () => {
        expect(smartTruncate('Steve Miller', 9, 5)).to.equal('Steve…ler');
    });

    it('should return a smart truncated string w/ an ellipsis at the 8th index position of the given string', () => {
        expect(smartTruncate('Not a good fit', 12, 8)).to.equal('Not a go…fit');
    });

    it('should return the given string when given a length that is larger than the given string', () => {
        expect(smartTruncate('Steve Miller', 14)).to.equal('Steve Miller');
    });

    it('should return the given string when given a length that will end up replacing 1 char with an ellipsis (noop)', () => {
        expect(smartTruncate('Steve Miller', 11)).to.equal('Steve Miller');
    });

    it('should append an ellipsis to the end of the truncated string when given a position that is larger than the given string and length', () => {
        expect(smartTruncate('Steve Miller', 10, 14)).to.equal('Steve Mil…');
    });

    it('should return the given string when given an undefined length', () => {
        expect(smartTruncate('Steve Miller')).to.equal('Steve Miller');
    });

    it('should return the given string when given a String that has a length of less than the minimum 4 chars', () => {
        expect(smartTruncate('Ste', 2)).to.equal('Ste');
    });

    it('should return the given string when given a String that has trailing whitespace and becomes trimmed to less than the minimum 4 chars in length', () => {
        expect(smartTruncate('Ste ', 2)).to.equal('Ste ');
    });

    it('should return the original, given value when given a non-String value', () => {
        expect(smartTruncate(1000, 3)).to.equal(1000);
        expect(smartTruncate(undefined, 3)).to.equal(undefined);
        expect(smartTruncate(null, 3)).to.equal(null);
    });
});
