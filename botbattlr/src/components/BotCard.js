import React, { useState, useEffect } from 'react';

const BotCard = ({ bot, setEnlistedBots, enlistedBots }) => {
    const [enlisted, setEnlisted] = useState(false);
  
    useEffect(() => {
      setEnlisted(enlistedBots.some(b => b.id === bot.id));
    }, [bot, enlistedBots]);
  
    const enlistBot = () => {
      setEnlisted(true);
      setEnlistedBots((prevEnlistedBots) => [...prevEnlistedBots, bot]);
    };
  
    const releaseBot = () => {
      setEnlisted(false);
      setEnlistedBots((prevEnlistedBots) => prevEnlistedBots.filter((b) => b.id !== bot.id));
    };
  
    const dischargeBot = () => {
      fetch(`http://localhost:8001/bots/${bot.id}`, {
        method: 'DELETE',
      })
        .then(() => {
          setEnlistedBots((prevEnlistedBots) => prevEnlistedBots.filter((b) => b.id !== bot.id));
        })
        .catch((error) => {
          console.error('Failed to discharge the bot', error);
        });
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
        </button> &nbsp;
        <button className="discharge-button" onClick={dischargeBot}>
          Discharge
        </button>
      </div>
    );
  };
  
  export default BotCard;
