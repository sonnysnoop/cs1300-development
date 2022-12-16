import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

export function ItemPage(props) {
    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        setFavorite(props.favorite);
    }, [props]);

    return (
        <div className="ItemPage-container">
            {props.pet.description}
        </div>
    )
}