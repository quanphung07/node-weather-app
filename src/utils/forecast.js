const request = require('request')

const forecast = (latitude, longtitude, callback) => {
   let url=`https://samples.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&appid=5f024fbfa4af3ef5c76c9dcf7059992e`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                temp:body.main.temp,
                hummid:body.main.humidity
            })
        }
    })
}

module.exports = forecast