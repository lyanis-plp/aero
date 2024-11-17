const { Markup, Composer } = require('telegraf');
const composer = new Composer();
require('dotenv').config();

composer.hears('РАЗМЕРЫ', (ctx)=>{
try {ctx.deleteMessage()
	const tex_info = `<i>Этолонными размерами являются</i>\n<b>44. размер</b> третий рост 170см.\n<b>46. размер</b> третий рост 170см.\n<b>48. размер</b> третий рост 172см.\n<b>50. размер</b> третий рост 172см.\n<b>52. размер</b> третий рост 174см.\n<b>54. размер</b> третий рост 174см.\n<b>56. размер</b> четвертый рост 180см.\n\n  
	 \n\nВозможны изменения.\nДля обсуждения подробностей размеров изделий используйте контакты\n\nТелефон: <b>+7 913 279 7152</b>\nТелеграм: @Yan_avia_style`
	ctx.replyWithSticker(process.env.STICKER1)
	ctx.replyWithHTML(tex_info, Markup.keyboard([['МОДЕЛИ'],['КАК ЗАКАЗАТЬ'],['ИНТЕРЕСНОЕ'],['НА ГЛАВНУЮ']]).oneTime().resize())
 } catch (error) {console.log('ошибка try saze.composer', error)}
})

module.exports = composer