'use strict';

var assert = require('assert');

assert.throws(
  () => require(`./build/Release/test_null_init.node`),
  /Module has no declared entry point[.]/);
