import React from "react";

function YourBotArmy({ enlistedBots, enlistBot, dischargeBot }) {
  const handleBotClick = (clickedBot) => {
    if (enlistedBots.some((bot) => bot.id === clickedBot.id)) {
      dischargeBot(clickedBot.id);
    } else {
      enlistBot(clickedBot);
    }
  };

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">    
          <h2>Your Bot Army</h2>
          <ul>
            {enlistedBots.map((bot) => (
              <li key={bot.id} onClick={() => handleBotClick(bot)}>
                <img src={bot.avatar_url} alt={bot.name} />
                {bot.name} (Click to {enlistedBots.some((b) => b.id === bot.id) ? "Discharge" : "Enlist"})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;

