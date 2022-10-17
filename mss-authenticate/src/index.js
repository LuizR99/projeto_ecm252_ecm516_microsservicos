const express = require('express');
const cors = require('cors');
const { expressjwt: jwt } = require('express-jwt')
const jwksClient = require('jwks-rsa')
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.static('public'));

app.use(
    jwt({
    secret: jwksClient.expressJwtSecret({
        jwksUri: "http://localhost:5000/.well-known/jwks.json",
        cache: true,
        rateLimit: true,
    }),
    algorithms: ['RS256']
    }).unless({path:[ { url: '/api/auth/register', methods: ['POST']}, { url: '/api/auth/login', methods: ['POST']}]})
)

require('./controllers/authController')(app);

app.listen(5000, '0.0.0.0');