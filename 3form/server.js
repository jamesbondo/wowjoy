var express = require('express')
var app = express()
var path = require('path')
console.log(path.join());
console.log(path.join(__dirname, 'public'));
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


// app.use(express.static('public'))
// app.use(express.static('files'))
app.use('/static',express.static('files'))
// app.use('/static', express.static('public'))
// app.use(express.static(path.join(__dirname, 'public')))
// app.use('/public',express.static(path.join(__dirname, 'public')))
// app.use(express.static(path.join(__dirname, '')))


app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.get('/:id', function(req, res) {
  res.send('id ' + req.params.id);
});

// app.post('/', function (req, res) {
//   res.send('Got a POST request')
// })
app.post('/test',function(req,res){
  console.log(req.body)
  res.send(req.body)
})


app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})
