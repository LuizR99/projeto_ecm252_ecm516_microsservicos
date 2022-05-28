const express = require('express');
const { expressjwt: jwt } = require('express-jwt')
const jwksClient = require('jwks-rsa')

const app = express();

app.use(express.json());

app.use(
    jwt({
    secret: jwksClient.expressJwtSecret({
        jwksUri: "http://localhost:5000/.well-known/jwks.json",
        cache: true,
        rateLimit: true,
    }),
    algorithms: ['RS256']
    }).unless({path: { url: '/api/user', methods: ['POST']}})
)

require('./controllers/userController')(app);

app.listen(3000, ()=>{
    console.log('Server mss-register is running on port 3000');
})