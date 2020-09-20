const { v4: uuidv4 } = require('uuid');
const { validationResult } = require('express-validator')
const HttpError = require("../models/http-error");

const getCoordsForAddress = require('../util/location');

let DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'RRRRRRRRRRR1',
        description: 'Im a Hacker',
        imageUrl: "https://images.unsplash.com/photo-1599403565492-12a203677c48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1187&q=80",
        address: "แขวง พระโขนง เขตคลองเตย กรุงเทพมหานคร 10110",
        location: {
            lat: 13.708668,
            lng: 100.6028571
        },
        creator: "u1"
    }
]

const getPlaceById = (req, res, next) => {
    const placeId = req.params.pid;
    const place = DUMMY_PLACES.find(p => {
        return p.id === placeId;
    });

    if (!place) {
        throw new HttpError('Could not find a place for the provided id. ', 404);
    }
    res.json({ place })
};

// function getPlaceById() { ... }
// const getPlaceById = function() { ... }

const getPlacesByUserId = (req, res, next) => {
    const userId = req.params.uid;

    const places = DUMMY_PLACES.filter(p => {
        return p.creator === userId
    });

    if (!places || places.length === 0) {
        return next(
            new HttpError('Could not find a place for the provided user id. ', 404)
        );
    }
    res.json({ places })
};

const createPlaces = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // console.log(errors)
        return next(new HttpError("Invalid inputs passed, places check your data.", 422));
    }
    const { title, description , address, creator } = req.body;

    let coordinates;

    try {
        coordinates = await getCoordsForAddress(address);
    } catch (error) {
        next(error);
    }
    const createdPlace = {
        id: uuidv4(),
        title,
        description,
        location: coordinates,
        address,
        creator
    };

    DUMMY_PLACES.push(createdPlace); // unshift(createdPlace)

    res.status(201).json({ place: createdPlace })
};

const updatePlace = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new HttpError("Invalid inputs passed, places check your data.", 422);
    }
    const { title, description } = req.body;
    const placeId = req.params.pid;

    const updatedPlace = { ...DUMMY_PLACES.find(p => p.id === placeId) };
    const placeIndex = DUMMY_PLACES.findIndex(p => p.id === placeId);
    updatedPlace.title = title;
    updatedPlace.description = description;

    DUMMY_PLACES[placeIndex] = updatedPlace;

    res.status(200).json({ place: updatedPlace });
};

const deletePlace = (req, res, next) => {
    const placeId = req.params.pid;
    if (!DUMMY_PLACES.find(p => p.id === placeId)) {
        throw new HttpError('Could not find a place for that id.', 404);
    }
    DUMMY_PLACES = DUMMY_PLACES.filter(p => p.id !== placeId);
    res.status(200).json({ message: 'Deleted place.' });
};

exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlaces = createPlaces;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;