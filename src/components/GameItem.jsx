import React from 'react';


function GameItem ({game}){
    return (
        <div className={`game-card ${game.favorite ? 'is-favorite' : ''}`}>
            <h3>{game.title}</h3>
            <p>Genre: {game.genre}</p>


        {/*Interactive button to trigger state change*/}
        <button
            type="button"
            onClick={() => onToggleFavorite(game.id)}
        >
            {game.favorite ? "Favorited" : "Add to Favorites"}
        </button>
        </div>


    );
}

export default GameItem;