const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const Appointment = require('./models/appointment');

var cors = require('cors');
const routes = require('./routes/routes');

app.use(cors());

app.set('view engine','ejs')
app.set('views','views')

app.use(bodyParser.json({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/public', express.static('public', { 
  setHeaders: (res, path, stat) => {
    res.set('Content-Type', 'application/javascript');
  },
}));


app.use('/appointment',routes);

sequelize
.sync()
.then(result=>{
    //console.log(result)
    app.listen(4000);
})
.catch(err=>console.log(err));

