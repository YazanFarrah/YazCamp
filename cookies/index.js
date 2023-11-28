const express = require("express");
const cookieParser = require('cookie-parser');

const app = express();

//use enviroment variables for production
app.use(cookieParser('mysecret'));

app.get('/greet', (req, res) => {
    // console.log(req.cookies);
    const { name = 'No-name' } = req.cookies;
    res.send(`Hey there, ${name}`)

})

app.get('/setname', (req, res) => {
    res.cookie('name', 'Minty Axe');
    res.send('Ok, sent you a cookie')
})
app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true })
    res.send('Ok, signed your fruit cookie')

})

//signed cookie if changed manually, from console, it wouldn't 
//be verified, so it doesn't change anything if someone manipulated it.
app.get('/verifyfruit', (req, res) => {
    res.send(req.signedCookies);
})

app.listen(3000, () => {
    console.log("Listening on PORT 3000");
});