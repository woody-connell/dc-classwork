let express = require('express');
let app = express();




app.get('/api', (req, res) => {
  res.json([{
    id: 1,
    username: 'Jeremy'
  }, {
    id: 2,
    username: 'Cainan'
  }, {
    id: 3,
    username: 'Woody'
  }
  ])
})

app.listen(3001, () => {
  console.log(`listening on port 3001`)
})