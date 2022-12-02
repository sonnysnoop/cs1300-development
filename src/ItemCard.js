import React from 'react';
import { PETS_DATA } from './constants';
import './App.css';
import { useState, useEffect } from 'react';

export function ItemCard(props) {
    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        setFavorite(props.favorite);
    }, [props]);

    const addFavorite = () => {
        setFavorite(true);
        props.addToFavorites(props.pet.id);
    }

    const removeFavorite = () => {
        setFavorite(false);
        props.removeFavorite(props.pet.id);
    }
    
    const categoryTxt = () => {
        if (props.pet.flying && props.pet.furry) {
            return "Flying, Furry";
        } else if (props.pet.flying) {
            return "Flying";
        } else if (props.pet.furry) {
            return "Furry";
        } else {
            return "None"
        }
    }

    return (
        <div className="Card-container">
            <div className="Card-heart-div"></div>
            <img src={props.pet.imgUrl} className="Card-img" />
            <div className="Card-text-container">
                <div className="Card-name-price-container">
                    <h2 className="Card-name">{props.pet.name}</h2>
                    <p className="Card-price-div">${props.pet.price}</p>
                </div>
                <p className="Card-weight">Weight: <p className="Card-description-label">{props.pet.weight}lb</p></p>
                <p className="Card-categories" style={{marginTop: 0}}>
                    Categories: <p className="Card-description-label">{categoryTxt()}</p>
                </p>
                <btn className="Card-heart-btn" onClick={favorite ? removeFavorite : addFavorite} style={favorite ? {backgroundColor: '#ff1a1a'} : {}}>
                    {/* { favorite ? 
                        <FaHeart style={{width: '1.5vw', height: '1.5vw', alignSelf: 'center', marginRight: 5, color: '#ffb3b3'}} /> :
                        <FaRegHeart style={{width: '1.5vw', height: '1.5vw', alignSelf: 'center', marginRight: 5, color: 'black'}} />
                    } */}
                    <p className="Card-heart-btn-txt" style={favorite ? {color: 'white'} : {}}>
                        {favorite ? "Added to favorites" : "Add to favorites"}
                    </p>
                </btn>
            </div>
        </div>
    )
}



