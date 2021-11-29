const assertEqual = require('../assertEqual');

assertEqual('Hello world','Hello world');
assertEqual('Hello world','hello world');
assertEqual(1,1);
assertEqual(1,0);
assertEqual(1,'1');
