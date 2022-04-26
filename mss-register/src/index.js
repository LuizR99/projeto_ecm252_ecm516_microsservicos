const express = require('express');

const app = express();

app.use(express.json());

require('./controllers/authController')(app);

app.listen(3000, ()=>{
    console.log('Server mss-register is running on port 3000');
})