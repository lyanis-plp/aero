const {Markup, Composer} = require('telegraf')
const composer = new Composer()
//require('dotenv').config()
//const User = require('../models/madeModel')

composer.hears('СОЗДАТЬ МОДЕЛЬ',(ctx)=>{
	console.log(process.env.ADMIN+88+ctx.chat.id)
	if(ctx.chat.id==Number(process.env.ADMIN) ){
		ctx.scene.enter('new_modelWizard')
	           }else{
							try {
		              const tex_def = `<b>Вы где то напутали. Вам на лучше на главную</b>`
		              ctx.replyWithSticker(process.env.STICKER)
		              setTimeout(() => {console.log('Задержка 1 секунды ');}, 1000);
		              ctx.replyWithHTML(tex_def, Markup.keyboard([['НА ГЛАВНУЮ']]).oneTime().resize())
								} catch (error) {console.log('ошибка new_model.composer.js', error)}
								}
	
	 });


module.exports = composer