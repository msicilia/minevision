## Capturing screenshots from a bot

We will start by configuring a `mineflayer` addon that allows us to take screenshots from inside the game. This will install globally the addon.

```
npm install - g prismarine-viewer
```

A first simple example is the following code.

```javascript
const mineflayer = require('mineflayer')
// const mineflayerViewer = require('prismarine-viewer').mineflayer
const mineflayerViewer = require('prismarine-viewer').headless

const bot = mineflayer.createBot({
  username: 'Bot'
})

bot.once('spawn', () => {
  mineflayerViewer(bot, { port: 3000, firstPerson: true })
  const interval = setInterval(() => {
  console.log("interval")
  }, 10000);

})
```

This opens a viewer of the subjective view of your bot that you can access with any Web browser via `localhost:3000`. The bot does nothing but printing in the console a message each 10 seconds. The idea is that we can make repeated actions by using the `setInterval` function. 