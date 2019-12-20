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


app.listen(3000, () => {console.log('🦊 Andre 3000 🐧')})