const {Markup, Composer} = require('telegraf')
const composer = new Composer()
//require('dotenv').config()
const BrendModel = require('../models/madeModel')


composer.hears('МОДЕЛИ', async(ctx)=>{
	await ctx.deleteMessage()
	 
		try{ctx.replyWithHTML(`------ СПИСОК МОДЕЛЕЙ ------`,
			  Markup.keyboard([['РАЗМЕРЫ','КАК ЗАКАЗАТЬ'],['ИНТЕРЕСНОЕ'],['НА ГЛАВНУЮ']]).oneTime().resize())
			  await BrendModel.findAll().then(res=>{
			  res.forEach(async function(elem){	
				let tex = `<b>${elem.id}.</b> Модель - <i><b>${elem.name_model}</b></i>\n<i>${elem.text_model}</i>\n\n<b>ЦЕНА ${elem.price} руб.</b>\n-------------------------------------------------`
				let media=[
				{type: "photo", media: `${elem.photo_model_1}`, caption:`${tex}`, parse_mode:'HTML'},
				{type: "photo", media: `${elem.photo_model_2}`},
				{type: "photo",media: `${elem.photo_model_3}`},
				{type: "photo",media: `${elem.photo_model_4}`},
				{type: "photo",media: `${elem.photo_model_5}`}
								 ]
				ctx.replyWithMediaGroup(media); 
				});
				})
			   
	     }catch(e){console.log('My models in file mybrend.composer.js', e)}
  
});

// composer.hears('МОИ МОДЕЛИ', async(ctx)=>{
// 	await ctx.deleteMessage()
	 
// 		try{ctx.replyWithHTML(`------ СПИСОК МОДЕЛЕЙ ------`,
// 			  Markup.keyboard([['РАЗМЕРЫ','КАК ЗАКАЗАТЬ'],['ИНТЕРЕСНОЕ'],['НА ГЛАВНУЮ']]).oneTime().resize())
// 			  await BrendModel.findAll().then(res=>{
// 			  res.forEach(async function(elem){	
// 				let tex = `<b>${elem.id}.</b> Модель - <i><b>${elem.name_model}</b></i>\n<i>${elem.text_model}</i>\n\n<b>ЦЕНА ${elem.price} руб.</b>\n-------------------------------------------------`
// 				let media=[
// 				{type: "photo", media: `${elem.photo_model_1}`, caption:`${tex}`, parse_mode:'HTML'},
// 				{type: "photo", media: `${elem.photo_model_2}`},
// 				{type: "photo",media: `${elem.photo_model_3}`},
// 				{type: "photo",media: `${elem.photo_model_4}`},
// 				{type: "photo",media: `${elem.photo_model_5}`}
// 								 ]
// 				ctx.replyWithMediaGroup(media); 
// 				});
// 				})
			   
// 	     }catch(e){console.log('My models in file mybrend.composer.js', e)}
  
// });

module.exports = composer