const {Markup, Composer} = require('telegraf')
const composer = new Composer()
//require('dotenv').config()
const BrendModel = require('../models/madeModel')

composer.hears('МОИ МОДЕЛИ',async(ctx)=>{
	await ctx.deleteMessage()
	if(ctx.chat.id==Number(process.env.ADMIN) ){
		try{await BrendModel.findAll().then(res=>{
				res.forEach(async function(elem){	
				let tex = `<b>#${elem.id}</b>\nМодель - <i><b>${elem.name_model}</b></i>\n<i>${elem.text_model}</i>\n\n<b>ЦЕНА ${elem.price} руб.</b>\n---------------------------------`
				let media=[
				{type: "photo", media: `${elem.photo_model_1}`, caption:`${tex}`, parse_mode:'HTML'},
				{type: "photo", media: `${elem.photo_model_2}`},
				{type: "photo",media: `${elem.photo_model_3}`},
				{type: "photo",media: `${elem.photo_model_4}`},
				{type: "photo",media: `${elem.photo_model_5}`}
								 ]
				ctx.replyWithMediaGroup(media  ); 
				console.log(`МОИ МОДЕЛИ heahs mymodels.composer`);
				if(elem.activ_marq==='activ'){
					                ctx.replyWithHTML(`Модель <i><b>#${elem.id}</b></i> <b>${elem.name_model}</b>status ${elem.activ_marq}`,  
					                Markup.inlineKeyboard([[Markup.button.callback(`ИЗМЕНИТЬ ЦЕНУ`,`DELETE*${elem.id}`)],
					                [Markup.button.callback(`ДЕАКТИВИРОВАТЬ`,`PASSIV*${elem.id}`)]])     )
				            }else{
				                  ctx.replyWithHTML(`Модель <i><b>#${elem.id}</b></i> <b>${elem.name_model}</b>`,  
					                Markup.inlineKeyboard([[Markup.button.callback(`ИЗМЕНИТЬ ЦЕНУ`,`DELETE*${elem.id}`)],
					                [Markup.button.callback(`АКТИВИРОВАТЬ`,`ACTIV*${elem.id}`)]])     )
				                  }
				
				});
				})
			  await ctx.replyWithHTML(`~~~~~~~~~~~~~~~~~~~~~~~~~~`,
				Markup.keyboard([['СОЗДАТЬ МОДЕЛЬ'],['НА ГЛАВНУЮ']]).oneTime().resize())
	     }catch(e){console.log('ошибка mymodels.composer.js', e)}
  }else{
				try {
		      const tex_def = `<b>Вы где то напутали. Вам на лучше на главную</b>`
		      ctx.replyWithSticker(process.env.STICKER)
		      ctx.replyWithHTML(tex_def, Markup.keyboard([['НА ГЛАВНУЮ']]).oneTime().resize())
					} catch (error) {console.log('ошибка mymodels.composer.js Вы где то напутали', error)}
					}
});


module.exports = composer