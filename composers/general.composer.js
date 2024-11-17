const { Markup, Composer } = require('telegraf');
const composer = new Composer();
//const User = require('../models/avsuserModel');
//const { where } = require('sequelize');
require('dotenv').config();
 
composer.hears('НА ГЛАВНУЮ',(ctx)=>{ console.log(process.env.ADMIN+88+ctx.chat.id)
	if(ctx.chat.id==Number(process.env.ADMIN) ){
		       try {ctx.deleteMessage()
			          const tex_def = `<b>Привет:</b><i>${ctx.message.chat.first_name} ${ctx.message.chat.last_name}</i>`
                ctx.replyWithSticker(process.env.STICKER, {caption: tex_def, parse_mode:'HTML'})
								//ctx.replyWithHTML(tex_def)
								//setTimeout(() => {console.log('Задержка 1 секунды ');}, 1000);
                ctx.replyWithHTML(tex_def, Markup.keyboard([['ПУБЛИКАЦИИ'],['СТАТИСТИКА'],['СОЗДАТЬ СТАТЬЮ','ВИДЕО СТАТЬЮ','УДАЛИТЬ СТАТЬЮ'],['МОИ МОДЕЛИ','СОЗДАТЬ МОДЕЛЬ']]).oneTime().resize())
                } catch (error) {console.log('ошибка при старте', error)}
	}else{
		   try {ctx.deleteMessage()
			      const tex_def = `<b>Здравствуйте ${ctx.message.chat.first_name} ${ctx.message.chat.last_name}\n</b>`
		        const border =`..................................`
						const tex_info = `\n<i>Спасибо за интерес к моему творчеству.\n<b>Меня зовут Ян.</b> Свыше трёх лет я создавал свой бренд. И вот свершилось!!!\n<b>Знакомтесь - AVIA STYLE</b>    ✈️\n1️⃣ Джинсовая одежда.\n2️⃣ Форма для летно-подъемно состава.\n\n⚡️ 100% Органика.\n⚡️ Ткань премиум класса.\n⚡️ Обработка премиум класса.\n⚡️ Контрастная авиационная тематика.</i>`
						ctx.replyWithPhoto(process.env.TYTLE2, {caption: tex_def+tex_info, parse_mode:'HTML'})
		        ctx.replyWithHTML(border, Markup.keyboard([['МОДЕЛИ'],['РАЗМЕРЫ','КАК ЗАКАЗАТЬ'],['ИНТЕРЕСНОЕ']]).oneTime().resize())
		       } catch (error) {console.log('ошибка при старте', error)}
					}
       


});



module.exports = composer