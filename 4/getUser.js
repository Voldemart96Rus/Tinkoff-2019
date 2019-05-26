'use strict'

const request = require('request'); 
const getUser = (id) => new Promise((resolve, reject) => {
    const url = `https://reqres.in/api/users/${id}`; 
 
    request(url, (err, res, body) => {
            if (err) { 
                reject(err); 
            } else { 
                const data = JSON.parse(body); 
                resolve(data);
            } 
        })
    });

module.exports = getUser;
