<h1>apn-formats</h1>
<hr>
<p>This package is meant to validate or lookup Assessor’s Parcel Number (APN) formats for any given state/county in the United States. This package is based off this <a href="https://github.com/dogpackdesign/apn-formats">python package</a></p>

[![Build Status](https://travis-ci.org/dogpackdesign/apn-formats-js.svg?branch=master)](https://travis-ci.org/dogpackdesign/apn-formats-js)

<h2>Getting Started</h2>
<code>npm install apn-formats</code>

<h2>Usage</h2>
<pre><code>
var apn-formats = require('apn-formats');
</code></pre>

<h3> lookup()
<pre><code>
/*
  lookup() returns a list of all valid APN formats for a given county. 
  If only a state is given, an object of all counties and their APNs are returned.
  If no arguments are provided, an object of all APN formats is returned.
  
  Case and spaces are ignored in state and county names. 
  State names can be full names or abbreviations ('Washington' or 'WA').
  District of Columbia is represented with 'DC'.

  X: Integer [0-9]
  A: Capital letter [A-Z]
  S: Space
  All other characters are literal
*/

</code></pre>

<pre><code>
var formats = apn-formats.lookup('Washington', 'King');

console.log(formats);
// output
[ 
  'XXXXXX-XXXX', 
  'XXXXXXXX', 
  'XXXXXX-XXXXSXX' 
]
</code></pre>

<pre><code>
var formats = apn-formats.lookup('hi');

console.log(formats);
// output
{ 
  maui: [ 'X-X-X-XXX-XXX', 'X-X-X-XXX-XXX-XXXX' ],
  kalawao: [],
  hawaii: [ 'X-X-X-XXX-XXX', 'X-X-X-XXX-XXX-XXXX' ],
  kauai: [ 'X-X-X-XXX-XXX', 'X-X-X-XXX-XXX-XXXX' ],
  honolulu: 
   [ 'X-X-X-XXX-XXX',
     'X-X-X-XXX-XXX-XXXX',
     'X-X-X-XXX-XXXSXX',
     'X-X-X-XXX-XXXSAA' ] 
 }
</code></pre>
<h3>validate()</h3>
<pre><code>
/*
  validate() checks whether a given APN is valid for a given county.
  Returns either true or false.
  All letter characters MUST be capitalized.
*/

var validation = apn-formats.validate('123456-7890', 'wa', 'king');
console.log(validation);
//output
true

var validation = apn-formats.validate('1234-5678, 'wa', 'king');
console.log(validation);
//output
false
</code></pre>

<h2>License</h2>
<p>Licensed under The MIT License (MIT)</p>
<p>For the full copyright and license information, please view the LICENSE.txt file.</p>
