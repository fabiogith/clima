const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2d13a8c868f808da40694074da1afeca&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}