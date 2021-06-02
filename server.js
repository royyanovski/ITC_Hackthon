const express = require('express')
const app = express()
const cors = require('cors');
const port = 3003
//https://stackoverflow.com/questions/57886005/how-to-decode-base64-to-image-in-nodejs

app.use(cors({origin: true}));

app.post('/images', (req, res) => {
  //res.send('Hello World!')
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log(req.data)
  console.log(req.body)
  console.log(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
