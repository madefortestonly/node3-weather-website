const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/97814d9ad4e1fa1ef73a14f81c729b64/${latitude},${longitude}?units=si`
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain. With a high temperature of ${body.daily.data[0].temperatureHigh} and a low temperature of ${body.daily.data[0].temperatureLow}`)
        }
    })
}

module.exports = forecast