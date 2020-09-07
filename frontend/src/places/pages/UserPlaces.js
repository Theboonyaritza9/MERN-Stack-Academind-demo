import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'RRRRRRRRRRR1',
        description: 'Im a Hacker',
        imageUrl:"https://images.unsplash.com/photo-1599403565492-12a203677c48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1187&q=80",
        address: "แขวง พระโขนง เขตคลองเตย กรุงเทพมหานคร 10110",
        location: {
            lat: 13.708668,
            lng: 100.6028571
        },
        creator: "u1"
    },
    {
        id: 'p2',
        title: 'RRRRRRRRRRR',
        description: 'Im a Hacker',
        imageUrl:"https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
        address: "แขวง พระโขนง เขตคลองเตย กรุงเทพมหานคร 10110",
        location: {
            lat: 13.708668,
            lng: 100.6028571
        },
        creator: "u2"
    }
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
