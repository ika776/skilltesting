require("dotenv").config();
const express = require('express')
const app = express()
const port = 3000
const cors=require('cors')
const bodyParser=require('body-parser')
const passport=require('passport')
var cookieSession = require('cookie-session')
const setup=require('./passport-setup')
require('./passport-setup')
require('./db-connect')


app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(cookieSession({
    name: 'test-session',
    keys: ['key1', 'key2']
  }))

  //middlewares
  const isloged=(req,res,next)=>{
      if(req.user){
          next()
      }else{
          res.sendStatus(401)
      }
  }

app.use(passport.initialize());
app.use(passport.session());

//route
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/failed', (req, res) => {res.send('you failed')})
app.get('/success', isloged,setup.tampung)
app.get('/google',passport.authenticate('google', { scope: ['profile','email'] }));
app.get('/google/callback',passport.authenticate('google', { failureRedirect: '/failed' }),(req, res) =>{res.redirect('/success');});
app.get('/logout', (req, res) => {
    req.session=null;
    req.logout();
    res.redirect('/')
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})