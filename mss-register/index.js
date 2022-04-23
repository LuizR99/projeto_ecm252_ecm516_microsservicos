const express = require('express');
const app = express();
app.use(express.json());

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    const user = {
        name,
        email,
        password
    };
    res.json(user);
});

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})