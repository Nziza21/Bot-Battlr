import React, { useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './style.css';

function App() {
const [enlistedBots, setEnlistedBots] = useState([]); 

return (
<div className="App">
<h1>Welcome to Bot Battlr</h1>
<BotCollection enlistedBots={enlistedBots} setEnlistedBots={setEnlistedBots} />
<YourBotArmy enlistedBots={enlistedBots} setEnlistedBots={setEnlistedBots} />
</div>
);
}

export default App;