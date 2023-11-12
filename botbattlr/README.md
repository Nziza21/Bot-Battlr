Bot Battlr
Welcome to Bot Battlr, a React-based web application that allows users to enlist, release, and discharge bots for epic battles!

Author
NZIZA SAMUEL

Features
Bot Collection: View and enlist bots from the available pool.
Your Bot Army: Manage your enlisted bots, release them back to the pool, or discharge them permanently.
Components
BotCard
Displays information about an individual bot, including its name, health, damage, and armor. Allows users to enlist, release, or discharge the bot.

BotCollection
Displays a collection of available bots for enlistment. Fetches bot data from the server and renders each bot using the BotCard component.

YourBotArmy
Shows the user's enlisted bots. Allows users to release enlisted bots back to the available pool. Renders enlisted bots using the BotCard component.

Getting Started
To run Bot Battlr locally, follow these steps:

Clone the repository: https://github.com/Nziza21/Bot-Battlr

bash
git clone [git@github.com:Nziza21/Bot-Battlr.git]
Navigate to the project directory:

bash
cd bot-battlr
Install dependencies:

bash
npm install
Start the application:

bash
npm start
The application will be accessible at http://localhost:3000 in your web browser.

Usage
Bot Collection:

Explore the available bots.
Click the "Enlist" button on a bot card to add it to your army.
Your Bot Army:

View and manage your enlisted bots.
Click the "Release" button to return a bot to the available pool.
Click the "Discharge" button to permanently remove a bot from the system.
Dependencies
React
API Endpoint
The application communicates with a local server at http://localhost:8001/bots to fetch and manipulate bot data.

Acknowledgments
Bot images and information are provided for demonstration purposes only. No bots were harmed in the making of this application.

License
This project is licensed under the MIT License - see the LICENSE file for details.
