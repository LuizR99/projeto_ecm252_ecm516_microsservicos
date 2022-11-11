const express = require('express');
const { expressjwt: jwt } = require('express-jwt')
const jwksClient = require('jwks-rsa')
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());



app.use(
    jwt({
    secret: jwksClient.expressJwtSecret({
        jwksUri: process.env.API_JWKSURI,
        cache: true,
        rateLimit: true,
    }),
    algorithms: ['RS256']
    }).unless({path: { url: '/api/user', methods: ['POST', 'GET']}})
)

require('./controllers/userController')(app);

app.listen(3000, '0.0.0.0');