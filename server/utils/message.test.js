var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', ()=>{
  it('should generate the correct message object', ()=>{
    var from = 'Benoit';
    var text = 'Hello';
    var res = generateMessage(from, text);
    expect(res.from).toBe(from);
    expect(res.text).toBe(text);
    expect(res.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', ()=>{
  it('should generate the correct location', ()=>{
    var from = 'Benoit';
    var latitude = 2;
    var longitude= 1
    var location = generateLocationMessage(from, latitude,longitude);
    expect(location.from).toBe(from);
    expect(location.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
    expect(location.createdAt).toBeA('number');
  });
});
