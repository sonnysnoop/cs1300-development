import logo from './logo.svg';
import './App.css';
import { ItemCard } from './ItemCard';
import { PETS_DATA } from './constants';
import { useState } from 'react';

function App() {
  const [flying, setFlying] = useState(false);
  const [furry, setFurry] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [favoritesCosts, setFavoritesCosts] = useState(0);

  const [weightSort, setWeightSort] = useState(true);
  const [priceSort, setPriceSort] = useState(false);

  const reset = () => {
    setFlying(false);
    setFurry(false);
    setShowFavorites(false);
    setFavorites([]);
    setFavoritesCosts(0);
    setWeightSort(true);
    setPriceSort(false);
  }

  const addToFavorites = (id) => {
    let favoritesTemp = favorites;
    favoritesTemp.push(id);
    setFavorites(favoritesTemp);
    setFavoritesCosts(favoritesCosts + PETS_DATA[id].price);
  }

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((item) => item !== id));
    setFavoritesCosts(favoritesCosts - PETS_DATA[id].price);
  }

  const renderCards = () => {
    let ids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    ids.sort((a,b) => {
      const petA = PETS_DATA[a];
      const petB = PETS_DATA[b];

      if (weightSort) {
        if (petA.weight > petB.weight) return 1;
        else return -1;
      } else {
        if (petA.price > petB.price) return 1;
        else return -1;
      }
    });

    // TODO: sorting
    const cards = [];
    for (let i=0; i<ids.length; i++) {
      if (showFavorites && !favorites.includes(ids[i])) continue;
      if (furry && !PETS_DATA[ids[i]].furry) continue;
      if (flying && !PETS_DATA[ids[i]].flying) continue;
      cards.push(<ItemCard pet={PETS_DATA[ids[i]]} addToFavorites={addToFavorites} removeFavorite={removeFavorite} favorite={favorites.includes(ids[i])} />);
    }
    return cards;
  }

  const handleRadioChange = () => {
    setWeightSort(!weightSort);
    setPriceSort(!priceSort);
  }


  return (
    <div className="App">
      <div className="Header">
        <h1>Cool Pet Store</h1>
      </div>
      <div className="Main">
        <div className="Main-side">
          <div className="Panel-container">
            <p className="Panel-title">Menu</p>
            <div className="Panel-line"></div>
            <div className="Panel-checkbox-row" style={{marginTop: '1vw'}}>
              <label className="Panel-label">
                <input type="checkbox" checked={furry} onChange={() => setFurry(!furry)} />
                Furry
              </label>
            </div>
            <div className="Panel-checkbox-row">
              <label className="Panel-label">
                <input type="checkbox" checked={flying} onChange={() => setFlying(!flying)} />
                Flying
              </label>
            </div>

            <div className="Panel-line" style={{marginTop: '1vw'}}></div>

            <div className="Panel-checkbox-row">
              <label className="Panel-label">
                <input type="radio" checked={weightSort} onChange={handleRadioChange} />
                Sort by weight
              </label>
            </div>
            <div className="Panel-checkbox-row">
              <label className="Panel-label">
                <input type="radio" checked={priceSort} onChange={handleRadioChange} />
                Sort by price
              </label>
            </div>

            <div className="Panel-line" style={{marginTop: '1vw'}}></div>

            <div className="Panel-checkbox-row">
              <label className="Panel-label">
                <input type="checkbox" checked={showFavorites} onChange={() => setShowFavorites(!showFavorites)} />
                Favorites
              </label>
            </div>
            <div className="Panel-checkbox-row">
              <p className="Panel-cost">Favorites Cost: ${favoritesCosts.toString()}</p>
            </div>
            <btn className="Reset-btn" onClick={reset}>Reset</btn>
          </div>
        </div>
        <div className="Main-content">
          {renderCards()}
        </div>
      </div>
    </div>
  );
}

export default App;
