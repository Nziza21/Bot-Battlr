import React, { useState } from 'react';

const BotCard = ({ bot,setEnlistedBots }) => {
  const [enlisted, setEnlisted] = useState(false);

  const enlistBot = () => {
    setEnlisted(true);
    setEnlistedBots((prevEnlistedBots) => [...prevEnlistedBots, bot]);
  };

  const releaseBot = () => {
    setEnlisted(false);
    setEnlistedBots((prevEnlistedBots) => prevEnlistedBots.filter((b) => b.id !== bot.id));
  };

  return (
    <div className={`bot-card ${enlisted ? 'enlisted' : ''}`}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={enlisted ? releaseBot : enlistBot}>
        {enlisted ? 'Release' : 'Enlist'}
      </button>
    </div>
  );
};

export default BotCard;
