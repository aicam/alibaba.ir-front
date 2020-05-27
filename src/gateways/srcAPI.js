const axios = require('axios');






export const citiesHotel = (cityName) => {
    return axios.create({
        baseURL: 'http://37.152.185.50:8080/hotels/' + cityName,
        timeout: 5000,
    });
}
