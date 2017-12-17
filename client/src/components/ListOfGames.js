import React from "react";

function ListofGames(props) {

  const gameDivs = props.games.map(function(game){
    return <div>{game.name} - {game.players} - {game.type} - {game.playtime} </div>
  });

  return (
    <div>
      {gameDivs}
    </div>
  );
}

export default ListofGames;
