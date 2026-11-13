import React from 'react';


function GameItem ({game}){
    return (
        <div className="game-card">
            <h3>{game.title}</h3>
            <p>Genre: {game.genre}</p>
        </div>
    );
}

export default GameItem;