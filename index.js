let express = require('express')
let layouts = require('express-ejs-layouts')
let app = express();

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')
app.use(layouts)

app.get('/', (req, res) => {
    res.render('index')
})

app.use('/projects', require('./controllers/projects'))