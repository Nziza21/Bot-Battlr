import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';
import PropTypes from 'prop-types'; 

const BotCollection = ({ enlistedBots, setEnlistedBots }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div>
      <h1>Available Bots</h1>
      <div className="bot-collection">
      {bots.map((bot) => (
  <BotCard key={bot.id} bot={bot} enlistedBots={enlistedBots} setEnlistedBots={setEnlistedBots} />
))}
      </div>
    </div>
  );
};

BotCollection.propTypes = {
  enlistedBots: PropTypes.array.isRequired,
  setEnlistedBots: PropTypes.func.isRequired,
};

export default BotCollection;
