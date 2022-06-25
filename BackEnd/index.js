const connect = require('./db');
const express = require('express');



const app = express();
const port = 5000;
connect();
app.use(express.json());
//Avaliable routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


app.listen(port, () => {
  console.log(`iNootBook app listening on port ${port}`)
})