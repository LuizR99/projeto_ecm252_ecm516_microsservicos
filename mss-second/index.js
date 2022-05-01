const express = require('express')
const { expressjwt: jwt } = require('express-jwt')
const jwksClient = require('jwks-rsa')

const app = express()


app.use(express.json())

app.use(
    jwt({
    secret: jwksClient.expressJwtSecret({
        jwksUri: "http://localhost:3000/.well-known/jwks.json",
        cache: true,
        rateLimit: true,
    }),
    algorithms: ['RS256']
    }).unless({path: ["/"]})
)


app.get('/', async (req, res) => {
    res.send("Rota não protegida")
})

app.get('/protected', async (req, res) => {
    res.send("Rota protegida")
})


app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000')
})
