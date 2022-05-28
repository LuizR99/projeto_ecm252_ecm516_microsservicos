const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.static('public'));

require('./controllers/authController')(app);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    app.use(cors());
    next();
});

app.listen(5000, ()=>{
    console.log('Server mss-register is running on port 5000');
})