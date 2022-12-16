import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

export function ItemCard(props) {
    const [favorite, setFavorite] = useState(false);
    const [showDescription, setShowDescription] = useState(false);

    useEffect(() => {
        setFavorite(props.favorite);
    }, [props]);

    const addFavorite = (event) => {
        setFavorite(true);
        props.addToFavorites(props.pet.id);
        event.stopPropagation();
    }

    const removeFavorite = (event) => {
        setFavorite(false);
        props.removeFavorite(props.pet.id);
        event.stopPropagation();
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
        <div className="Card-container" onMouseEnter={() => setShowDescription(true)} onMouseLeave={() => setShowDescription(false)} onClick={() => props.setPoppedPet(props.pet)}>
            <div className="Card-heart-div"></div>
            {showDescription ?
                <div className="Card-description" style={{backgroundColor: props.pet.themeColor, color: props.pet.textColor}}>
                    <div>{props.pet.description}<br />{props.pet.description2}</div>
                    <div style={{fontWeight: '500', fontSize: '1.2rem'}}>Click for more</div>
                </div> :
                <img src={props.pet.imgUrl} className="Card-img" />
            }
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



