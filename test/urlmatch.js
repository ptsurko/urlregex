const tap = require('tap');
const regex = require('../index.js');

const fixtures = [
  'http://foo.com/blah_blah',
  'http://foo.com/blah_blah/',
  'http://foo.com/blah_blah_(wikipedia)',
  'http://foo.com/blah_blah_(wikipedia)_(again)',
  'http://www.example.com/wpstyle/?p=364',
  'https://www.example.com/foo/?bar=baz&inga=42&quux',
  'http://a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z.com',
  'http://mw1.google.com/mw-earth-vectordb/kml-samples/gp/seattle/gigapxl/$[level]/r$[y]_c$[x].jpg',
  'http://user:pass@example.com:123/one/two.three?q1=a1&q2=a2#body',
  'http://www.microsoft.xn--comindex-g03d.html.irongeek.com',
  'http://✪df.ws/123',
  'http://localhost/',
  'http://userid:password@example.com:8080',
  'http://userid:password@example.com:8080/',
  'http://userid@example.com',
  'http://userid@example.com/',
  'http://userid@example.com:8080',
  'http://userid@example.com:8080/',
  'http://userid:password@example.com',
  'http://userid:password@example.com/',
  'http://142.42.1.1/',
  'http://142.42.1.1:8080/',
  'http://➡.ws/䨹',
  'http://⌘.ws',
  'http://⌘.ws/',
  'http://foo.com/blah_(wikipedia)#cite-1',
  'http://foo.com/blah_(wikipedia)_blah#cite-1',
  'http://foo.com/unicode_(✪)_in_parens',
  'http://foo.com/(something)?after=parens',
  'http://☺.damowmow.com/',
  'http://code.google.com/events/#&product=browser',
  'http://j.mp',
  'ftp://foo.bar/baz',
  'http://foo.bar/?q=Test%20URL-encoded%20stuff',
  'http://مثال.إختبار',
  'http://例子.测试',
  'http://उदाहरण.परीक्षा',
  'http://-.~_!$&\'()*+\';=:%40:80%2f::::::@example.com',
  'http://1337.net',
  'http://a.b-c.de',
  'http://223.255.255.254',
  'http://example.com?foo=bar',
  'http://example.com#foo',
  'ws://localhost:8080',
  'ws://foo.ws',
  'ws://a.b-c.de',
  'ws://223.255.255.254',
  'ws://userid:password@example.com',
  'ws://➡.ws/䨹',
  '//localhost:8080',
  '//foo.ws',
  '//a.b-c.de',
  '//223.255.255.254',
  '//userid:password@example.com',
  '//➡.ws/䨹',
  'www.google.com/unicorn',
  'http://example.com.'
];

for (const x of fixtures) {
  tap.ok(regex().test(x), x);
}