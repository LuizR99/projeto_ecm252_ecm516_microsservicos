const fs = require('fs')
const rsaPemToJwk = require('rsa-pem-to-jwk')

const privateKey = fs.readFileSync('./certs/jwtRS256.key')
const jwk = rsaPemToJwk(privateKey, {use: 'sig'}, 'public')
console.log(jwk)