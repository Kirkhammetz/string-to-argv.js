# Parse String to ARGV as object

Parse a string of a unix-like command line and parse it into a more usable Object

**nb** Uses Classes, use `node>=4.2`

## Usage
```js
  let parsed = new Parser('cmd -z -c -v -flag1 123 -p -f test --depth=0 -s --string=noquotes --flagstring="with spaces" source/ dest/')
  // @return
  {
    raw: 'cmd -z -c -v -flag1 123 -p -f test --depth=0 -s --string=noquotes --flagstring="with spaces" source/ dest/',
    command: 'cmd',
    _: [ 'source/', 'dest/' ],
    z: true,
    c: true,
    v: true,
    flag1: '123',
    p: true,
    f: 'test',
    depth: '0',
    s: true,
    string: 'noquotes',
    flagstring: 'with spaces'
  }
```
## Know Issue to fix

  - messing up with nested string in the stringed flag mess the regexp up.

##Error
```js
  try{
    let parsed = new Parser() // or empty string
  } catch(e) {
    console.log(e.message)
  }
  //> 'Parser: command provided is empty.'
```
