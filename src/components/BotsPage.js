
import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from './BotSpecs'; 

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    fetchBots();
  }, []);

  const fetchBots = () => {
    fetch('https://bots-rzaq.onrender.com/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching bots:', error));
  };

  const enlistBot = (bot) => {
    if (!enlistedBots.some((b) => b.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const dischargeBot = (botId) => {
    const updatedArmy = enlistedBots.filter((bot) => bot.id !== botId);
    setEnlistedBots(updatedArmy);
  };

  const handleClickBotCard = (bot) => {
    setSelectedBot(bot);
  };

  const handleGoBack = () => {
    setSelectedBot(null);
  };

  const handleEnlistInSpecs = (bot) => {
    enlistBot(bot);
    setSelectedBot(null);
  };

  return (
    <div>
      <YourBotArmy enlistedBots={enlistedBots} dischargeBot={dischargeBot} />
      {selectedBot ? (
        <BotSpecs bot={selectedBot} goBack={handleGoBack} enlistBot={handleEnlistInSpecs} />
      ) : (
        <BotCollection bots={bots} handleClickBotCard={handleClickBotCard} enlistBot={enlistBot} />
      )}
    </div>
  );
}

export default BotsPage;
