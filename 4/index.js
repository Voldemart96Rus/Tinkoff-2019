'use strict'

const getUser = require('./getUser');
const User  = require('./user');

const result = [];

for(let i = 1; i <= 10; i++) {
	getUser(i).then((data) =>
		result.push(new User(data).importUser()))
		.catch(console.error);
}
