const express = require('express')
const app = express()
const port = 3000
const Restaurant = require('./models/restaurant')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const routes = require('./routes')

require('./config/mongoose')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
// 將 request 導入路由器
app.use(routes)


// app.get('/search', (req, res) => {
//   const keyword = req.query.keyword
//   const restaurants = restaurantList.results.filter(restaurant => {
//     // return restaurant.title?.includes(keyword)
//     return restaurant.name && restaurant.name.toLowerCase().includes(keyword.toLowerCase())
//   })

//   res.render('index', { restaurants: restaurants });
// })

//"echo \"Error: no test specified\" && exit 1"

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})