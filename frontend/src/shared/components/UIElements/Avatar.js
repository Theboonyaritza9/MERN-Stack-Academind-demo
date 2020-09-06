import React from 'react';

import './Avatar.css'

export default function Avatar(props) {
    return (
        <div className={`avatar ${props.className}`} style={props.style}>
            {props.children}
            <img 
                src={props.image}
                alt={props.alt}
                style={{width: props.width, height: props.width}}
            />
        </div>
    )
}
