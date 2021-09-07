const express = require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const {config}= require('./config');
const {modeleRoute}= require('./routes/modeleRoute');
const {vehiculeRoute}= require('./routes/vehiculeRoute');
const {marqueRoute}= require('./routes/marqueRoute');

const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

const app = express();
// Add headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(bodyParser.json());
app.use('/api/vehicules', vehiculeRoute);
app.use('/api/modeles', modeleRoute);
app.use('/api/marques', marqueRoute);

app.use(express.static('public'));
app.use('/', (req, res)=>{
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(config.PORT, () => {
  console.log('Server started at http://localhost:5000');
});
