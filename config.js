'use strict';

exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/earbugs'
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-earbugs';
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET || "some-random-string";


