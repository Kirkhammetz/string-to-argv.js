const { expect } = require('chai')
const Parser = require('../bin/classes/Parser')

describe('Parser Class', () => {

  it('should throw if no value passed', () => {
    expect(() => new Parser()).to.throw(Error)
    expect(() => new Parser('')).to.throw(Error)
  })

  it('should parse only the command with no arguments', () => {
    let parsed = new Parser('command')
    expect(parsed).to.eql({
      _: [],
      command: 'command',
      raw: 'command'
    })
  })

  it('should onechar flag when last element of the string', () => {
    let parsed = new Parser('command -p')
    expect(parsed).to.eql({
      _: [],
      command: 'command',
      raw: 'command -p',
      p: true,
    })
  })

  it('should onechar flag when last element of the string', () => {
    let parsed = new Parser('command --p')
    console.log(parsed)
    // expect(parsed).to.eql({
    //   _: [],
    //   command: 'command',
    //   raw: 'command',
    //   p: true,
    // })
  })

  it('should onechar flag when last element of the string', () => {
    let parsed = new Parser('command --p --asd --v asd asd123')
    console.log(parsed)
    // expect(parsed).to.eql({
    //   _: [],
    //   command: 'command',
    //   raw: 'command',
    //   p: true,
    // })
  })

  it('should parse some options', () => {
    let parsed = new Parser('cmd -p -f test --flag=flag --flagstring="flag with a string with space" source/ dest/')
    expect(parsed).to.eql({
      raw: 'cmd -p -f test --flag=flag --flagstring="flag with a string with space" source/ dest/',
      command: 'cmd',
      _: [ 'source/', 'dest/' ],
      p: true,
      f: 'test',
      flag: 'flag',
      flagstring: 'flag with a string with space'
    })
  })

  it('should parse this not nice looking string', () => {
    let parsed = new Parser('cmd -z -c -v -flag1 123 -p -f test --depth=0 -s --string=noquotes --flagstring="with spaces" source/ dest/')
    expect(parsed).to.eql({
      raw: 'cmd -z -c -v -flag1 123 -p -f test --depth=0 -s --string=noquotes --flagstring="with spaces" source/ dest/',
      command: 'cmd',
      _: [ 'source/', 'dest/' ],
      z: true,
      c: true,
      v: true,
      flag1: "123",
      p: true,
      f: "test",
      depth: "0",
      s: true,
      string: 'noquotes',
      flagstring: "with spaces"
    })
  })
})