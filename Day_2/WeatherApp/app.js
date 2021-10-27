const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=be64b522d5cce0d476ac424e1d2c73b9&query=Bangkok'

// request({ url: url }, (error, response) => {
//     console.log(response)
	
// 	const data = JSON.parse(response.body)
//     console.log(data)
// 	//console.log(data.current)
//     console.log(`El clima del día de hoy es ${data.current.weather_descriptions}. Y la temperatura es ${data.current.temperature}`)

// })

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!')
    } else if (response.body.error) {
        console.log('Unable to find location!')
    }     
    else {
        //const data = JSON.parse(response.body)
        //console.log(data.current)
        //console.log(response.body.current)
        console.log(response.body.current.weather_descriptions[0])
        console.log('Temperatura actual: ' + response.body.current.temperature + ' grados')
        console.log('Temperatura en el exterior: ' + response.body.current.feelslike + ' grados')
    }
})
