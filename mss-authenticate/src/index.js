const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.static('public'));

require('./controllers/authController')(app);



app.listen(5000, ()=>{
    console.log('Server mss-register is running on port 5000');
})