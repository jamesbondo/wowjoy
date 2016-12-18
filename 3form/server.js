var express = require('express')
var app = express()
var path = require('path')
console.log(path.join());
console.log(path.join(__dirname, 'public'));

// app.use(express.static('public'))
// app.use(express.static('files'))
// app.use('/static', express.static('public'))
// app.use(express.static(path.join(__dirname, 'public')))
app.use('/static',express.static(path.join(__dirname, 'public')))
app.use('/views',express.static(path.join(__dirname, 'views')))


app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.post('/', function (req, res) {
  res.send('Got a POST request')
})
app.get('/:id', function(req, res) {
  res.send('id ' + req.params.id);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
