const { Markup, Composer } = require('telegraf');
const composer = new Composer();
require('dotenv').config();

composer.hears('КАК ЗАКАЗАТЬ', (ctx)=>{
try {ctx.deleteMessage()
	const tex_info = `<i>ТЕЛЕФОН ДЛЯ ЗАКАЗА</i>\n-----------------------------------------\n  
	<b>+7 913 279 7152</b>\n\n Звоните на этот телефон.\nЛибо пишите в телеграм @Yan_avia_style\n\nКонтактное лицо <b>ЯН</b>\n\nПРЕДОПЛАТА 50%`
	ctx.replyWithSticker(process.env.STICKER1)
	ctx.replyWithHTML(tex_info, Markup.keyboard([['МОДЕЛИ'],['РАЗМЕРЫ'],['ИНТЕРЕСНОЕ'],['НА ГЛАВНУЮ']]).oneTime().resize())
 } catch (error) {console.log('ошибка try sale.composer', error)}
})

module.exports = composer
