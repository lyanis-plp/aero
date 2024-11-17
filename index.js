const {Telegraf, Scenes, session} = require('telegraf');
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_API_KEY);

const priceScene = require('./scenes/priceScene');
const photoarticleScene = require('./scenes/photo_articleScene');
const videoarticleScene = require('./scenes/video_articleScene');
const new_modelScene = require('./scenes/new_modelScene');
const stage= new Scenes.Stage([new_modelScene, priceScene, photoarticleScene, videoarticleScene]); //priceScene, brendScene,
bot.use(session());
bot.use(stage.middleware());

bot.use(require('./composers/start.composer')); 
bot.use(require('./composers/general.composer'));
bot.use(require('./composers/sale.composer'));
bot.use(require('./composers/size.composer'));
bot.use(require('./composers/models.composer'));
bot.use(require('./composers/new_model.composer'));
bot.use(require('./composers/new_article.composer'));
bot.use(require('./composers/article.composer'));
bot.use(require('./composers/mymodels.composer'));
bot.use(require('./composers/category.composer'));

//bot.on('photo', ctx=>{console.log(ctx.message.photo)});
//bot.on('video', ctx=>{console.log(ctx.message.video)});
//bot.on('message', ctx=>{console.log(ctx.message)});
bot.launch();

process.once('SIGINT', () =>bot.stop('SIGINT'));
process.once('SIGTERM', () =>bot.stop('SIGTERM'));
