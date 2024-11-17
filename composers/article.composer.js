const {Markup, Composer} = require('telegraf')
const composer = new Composer()
require('dotenv').config()
const Article_table = require('../models/articleModel')


composer.hears('ИНТЕРЕСНОЕ', async (ctx)=>{
	try{ctx.reply(`------ Список статей ------`,Markup.keyboard([['МОДЕЛИ'],['РАЗМЕРЫ','КАК ЗАКАЗАТЬ'],['НА ГЛАВНУЮ']]).oneTime().resize())
		  await ctx.deleteMessage()
		  await Article_table.findAll().then(res=>{
			res.forEach(async function(elem){	
			let tex = `${elem.id}.     <b>${elem.title}</b>\n.......................................................................`
			ctx.replyWithHTML(tex,Markup.inlineKeyboard([[Markup.button.callback('ПОСМОТРЕТЬ','article*'+elem.id)]]));
      });})
			 
     }catch(e){console.log('My models in file mybrend.composer.js', e)}
});

// composer.on('callback_query', async (ctx)=>{  
// 	ctx.deleteMessage();
// 	ctx.answerCbQuery();  
// 	console.log(`колбек composer ${ctx.update.callback_query.data}`)
// 	let arr = ctx.update.callback_query.data.split('*');
// 	//console.log('1'+arr[0]+'\n2'+arr[1])
// 	switch (arr[0]) {
// 		case 'article':
// 			try{await Article_table.findOne({ where: { id: arr[1]}}).then(elem =>{ 
				 
// 				let tex = `Статья <b>#${elem.id}</b>\n<b>${elem.title}</b>\n<i>${elem.conva}</i>`
// 				let media=[
// 					{type: elem.type, media: `${elem.photo}`, caption:`${tex}`, parse_mode:'HTML'},
// 					{type: elem.type, media: `${elem.video}`}
// 				]
// 				ctx.replyWithMediaGroup(media); 
				 
// 				});//promis
// 				ctx.replyWithSticker(process.env.STICKER1, Markup.keyboard([['МОДЕЛИ'],['РАЗМЕРЫ','КАК ЗАКАЗАТЬ'],['ИНТЕРЕСНОЕ'],['НА ГЛАВНУЮ']]).oneTime().resize())
// 				}catch(e){console.log('article', e)};
// 		break;
// 	}
// })



module.exports = composer