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
    }).unless({path: [{ url: '/api/haven', methods: ['GET']}
]})
)

require('./controllers/havenController')(app);

app.listen(4000, ()=>{
    console.log('Server mss-haven is running on port 4000');
})