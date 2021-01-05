// Write your tests here!
const { expect } = require('chai');
const substitution = require('../src/substitution');

describe(('Substitution Cipher'), () =>  {
    it(('Should return an encoded message'), () => {
        const expected = 'jrufscpw';
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.eql(expected)
    })
    it(('Should return a decoded message'), () => {
        const expected = 'thinkful';
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.eql(expected)
    })
    it(('Should return false input or alphabet is missing'), () => {
        const expected = false;
        const actual = substitution("", "");
        expect(actual).to.eql(expected);
    });
    it(('Should return false if the alphabet parameter is not a string of exactly 26 characters'), () => {
        const expected = false;
        const actual = substitution("thinkful", "short");
        expect(actual).to.eql(expected)
    })
    it(('Should return false if each character in the alphabet is not unique'), () => {
        const expected = false;
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.eql(expected)
    })
    it(('Spaces should be maintained throughout'), () => {
        const expected = 'elp xhm xf mbymwwmfj dne';
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.eql(expected)
    })
    it(('Capital letters can be ignored'), () => {
        const expected = 'jrufscpw';
        const actual = substitution("THINKFUL", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.eql(expected)
    })
})

// substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
// substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
// substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful'

// substitution("thinkful", "short"); //> false
// substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); //> false