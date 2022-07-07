const mineflayer = require('mineflayer')
const { chromium } = require("playwright");
//const axios = require('axios').default;


const mineflayerViewer = require('prismarine-viewer').mineflayer


const bot = mineflayer.createBot({
  username: 'Bot'
})

const awaitTimeout = delay =>
  new Promise(resolve => setTimeout(resolve, delay));


bot.once('spawn', () => {
  mineflayerViewer(bot, { port: 3000,
                         firstPerson:true})
  const interval = setInterval(async () => {
        let browser = await chromium.launch();
        let page = await browser.newPage();
        await page.setViewportSize({ width: 1280, height: 1080 });
        await page.goto("localhost:3000");
        await awaitTimeout(2000);
        await page.screenshot({ path: `image.png` });
        await browser.close();
        // axios({
        //   method: 'get',
        //   url: 'http://127.0.0.1:8080/checkimage/image.png'
        // }).then(apiResponse => {
        //    console.log(apiResponse.data)
        //    if (apiResponse.data.probs[apiResponse.data.classidx]> 0.8){
        //       console.log(`I love ${apiResponse.data.label} like this one.`)
        //       bot.chat(`I love ${apiResponse.data.label} like this one.`)
        //    }
        // })
      
      }
  , 5000);



})


