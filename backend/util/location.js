const axios = require('axios');

const HttpError = require('../models/http-error');

const API_KEY = 'AIzaSyDgLmMpKCzveJf1_yuA0fUzzhy0WRChvZA';

async function getCoordsForAddress(address) {
    return {
        lat: 40.7484474,
        lng: -73.9871516
    };
    // const response = await axios.get(
    //     `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    //         address
    //     )}&key=${API_KEY}`
    // );

    // const data = response.data;

    // if (!data || data.status === 'ZERO_RESULTS') {
    //     const error = new HttpError(
    //         'Could not find location for the specified address.',
    //         422
    //     );
    //     throw error;
    // }

    // const coordinates = data.results[0].geometry.location;

    // return coordinates;
}

// const getCoordsForAddress = async (address) => {
//     let data;
//     try {
//         const url = 'https://api.mapbox.com/geocoding/v5';
//         const endpoint = 'mapbox.places';
//         const searchText = encodeURIComponent(address);
//         let YOUR_MAPBOX_ACCESS_TOKEN;

//         const response = await axios({
//             method: 'GET',
//             url: `${url}/${endpoint}/${searchText}.json/?access_token=${YOUR_MAPBOX_ACCESS_TOKEN}`,
//         });
//         data = response.data;
//     } catch (e) {
//         throw new HttpError('Something went wrong', 500);
//     }

//     if (!data || data.status === 'ZERO_RESULTS') {
//         throw new HttpError(
//             'Could not find location for the specified address.',
//             422
//         );
//     }

//     const [lng, lat] = data.features[0].center;

//     return { lat, lng };
// };

module.exports = getCoordsForAddress;