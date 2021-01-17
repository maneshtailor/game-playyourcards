## Christmas Coding Challenge
This is a game of Play your Cards right for fun and learning

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Rules of the game (One Player Game)
At the start of the game, the player will be given 10 counters to start their game with. They are given/shown 1 random playing card from a full pack of a standard 52 card deck. They then have to choose whether they think the next card will be higher or lower than the card they were shown, plus they have to choose the number of counters which they want to bet.
They can bet any number of counters up to the amount they have. BUT if they ever reach zero counters the game is over!
The game will then show the player the second random card from the deck. If that card matched their guess, for example, it was higher and they guessed higher, they then get their counters back and the same number of counters on top, i.e. they double their bet. If they were wrong, then they lose their bet amount.
The game continues with the player guessing again if the 3rd card will be higher or lower than the current card which was shown, and they bet a number of counters again.
This cycle should repeat until a total of 7 cards have been shown to the player. At the 7th card being revealed the game ends and should show the player total counter score. (Assuming they didn’t lose already by getting to zero counters before this point).
In this game Ace is a high card only and a repeated card doesn't cause you to win or loose on that card.
The aim of the game is for the player to increase their 10 counters to as many as they can by betting counters and guessing correctly if the next card is higher or lower than the last card, with a total of 7 cards. If at any point they reach 0 counters - its game over!


## To run the game

Ensure you have NodeJS installed on your machine. In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
