#!/usr/bin/env node
'use strict';
const getScopes = require('./getScopes');
console.log(getScopes().sort().join('\n'));
