const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const formidableMiddleware = require('express-formidable');
const AdminBro = require('admin-bro');
const AdminBroExpressjs = require('admin-bro-expressjs');
const path = require('path');
const expressValidator = require('express-validator');

//app.set('view engine', ejs);

//connect Database
connectDB()


//Middleware


app.use(cors());
app.use(bodyParser.json());
//app.use(
//bodyParser.urlencoded({
//extended: false,
//})
//);

//Define Routes
app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/public', express.static('public'));
app.use('/api/upload', require('./routes/api/upload'));
// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
