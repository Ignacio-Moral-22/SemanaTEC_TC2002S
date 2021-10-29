const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')
const forecast = require('./utils/forecast.js')

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

const viewsPath = path.join(publicDirectoryPath, '/templates/views')
app.set('views', viewsPath)
app.set('view engine', 'hbs')

const partialsPath = path.join(publicDirectoryPath, '/templates/partials')
hbs.registerPartials(partialsPath)

app.get('/', (req, res) => {
    // res.send('Hello express!')
    //res.send('<h1>Weather</h1>')
    // res.sendFile('html/index.html', {root: publicDirectoryPath })
    res.render('index', {
        title: 'Weather',
        name: 'Ignacio Moral'
    })
})

app.get('/help/', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Ignacio Moral'
    })
})

app.get('/about/', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Ignacio Moral'
    })
})

app.get('/weather/', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "No se encontro la direccion"
        })
    }
    forecast(req.query.address, (error, forecastData) => {
        if (error) {
            res.send({ error })
        }

        res.send({
            clima: forecastData,
            address: req.query.address
        })
    })
})


app.listen(3000, () => {
    console.log('Server is up on server 3000')
})
