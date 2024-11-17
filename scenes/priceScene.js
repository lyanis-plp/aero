const {Scenes, Composer, Markup } = require('telegraf')
require('dotenv').config();
const Model_table = require('../models/madeModel')
//===============================================================
//const redis = require('redis');                                  // REDIS
//const client = redis.createClient();                             // 
//client.on('connect', function(){console.log('Connect Redis')})   // 
//===============================================================
///////////////////////////////////////////////////1 сцена
const priceData = new Composer()
priceData.on('callback_query', async (ctx)=>{
	//ctx.deleteMessage();
	ctx.wizard.state.priceWizard = {}
	console.log("callback pg-14 priceScene => "+ctx.update.callback_query.data)
	let arr = ctx.update.callback_query.data.split('*');
  ctx.wizard.state.priceWizard.id=  arr[1]
	//console.log(ctx.wizard.state.priceWizard.id)
	const tex= 'Вы готовы изменить цену? Чтобы это сделать отправте мне новую цену в рублях.'
	await ctx.replyWithHTML(tex)
	await ctx.replyWithSticker(process.env.STICKER1, Markup.keyboard([['НА ГЛАВНУЮ']]).oneTime().resize()); 
return ctx.wizard.next()   
});////////////
///////////////////////////////////////////////////2 сцена
const priceSaveData = new Composer()
priceSaveData.on('text', async (ctx)=>{
	//ctx.deleteMessage();
	console.log(ctx.message.text)
	if(!isNaN(ctx.message.text)){
		const brenddata = {price:ctx.message.text}  
		await Model_table.update(brenddata,{where:{id:ctx.wizard.state.priceWizard.id}}).then(res=>{
			ctx.replyWithHTML('ПОЗДРАВЛЯЕМ НОВАЯ ЦЕНА '+ctx.message.text+' рублей успешно сохранена', Markup.keyboard([['НА ГЛАВНУЮ']]).oneTime().resize()); 
		})
	}else{
		ctx.replyWithHTML('Вы наверное ошиблись.\nОтправили не численное значение цены.\nПоэтому Остается СТАРАЯ ЦЕНА.\nДля изменения Цены повторите действия вновь', Markup.keyboard([['НА ГЛАВНУЮ']]).oneTime().resize()); 
	}
	 



  
return ctx.scene.leave();  
});
//////////////////////////////////////////////////finish


const priceScene = new Scenes.WizardScene('priceWizard', priceData, priceSaveData);
module.exports = priceScene