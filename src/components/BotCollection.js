

import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, handleClickBotCard, enlistBot }) {
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleClickBotCard={handleClickBotCard} enlistBot={enlistBot} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
