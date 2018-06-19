const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var user = {
		   "user4" : {
		      "name" : "mohit",
		      "password" : "password4",
		      "profession" : "teacher",
		      "id": 4
		   }
		}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/getData',function(req,res){
	  res.end(JSON.stringify(user));
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
