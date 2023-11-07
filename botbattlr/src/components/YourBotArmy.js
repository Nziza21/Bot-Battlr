import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ enlistedBots, setEnlistedBots }) => {
  return (
    <div>
      <h1>Your Bot Army</h1>
      <div className="bot-collection">
        {enlistedBots.map((bot) => (
          <BotCard key={bot.id} bot={bot} enlistedBots={enlistedBots} setEnlistedBots={setEnlistedBots} />
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
