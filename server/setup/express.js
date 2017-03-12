const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
app.use(morgan(process.env.NODE_ENV == "development" ? "dev" : "combined"));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/../../public'));

app.listen(app.get('port'), () => {
  console.log(`Comments server listening on port ${app.get('port')}!`)
})

module.exports = app;
