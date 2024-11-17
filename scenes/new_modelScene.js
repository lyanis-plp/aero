const {Scenes, Composer, Markup } = require('telegraf')
const Model_table = require('../models/madeModel')
//const User = require('../models/userModel')
//await Brends.findOne({ where: { vision_marq:1 } }).then(res=>{})
/////////////////////////modelName//////////////////////////////////////////////////////////
const modelName = new Composer()
modelName.on('text', async (ctx)=>{
	 
	try{ctx.wizard.state.new_modelWizard = {}
			// await User.findOne({ where: { uuid:ctx.message.chat.id } }).then(res=>{
			// 	ctx.wizard.state.new_modelWizard.uuid_phone = res.phone;
			// 	ctx.wizard.state.new_modelWizard.uuid_brend = res.brendName;
			// 	ctx.wizard.state.new_modelWizard.uuid_logo = res.brendLogo;
      //   });
				await ctx.deleteMessage()
        const tex = `<b>НАЧИНАЕМ ПРОЦЕС РЕГИСТРАЦИИ ВАШЕЙ МОДЕЛИ</b>
        \nПервое действие:\n<b>ПРИДУМЫВАЕМ НАЗВАНИЕ ВАШЙ МОДЕЛИ</b>`
        await ctx.replyWithHTML(tex);
        return ctx.wizard.next()
         
    }catch(e){console.log('modelName error', e)}
     
})
//////////////////////////////////////////////////////////////////////////////////////////
const modelPrice = new Composer()
modelPrice.on('text', async (ctx)=>{
    try{
    ctx.wizard.state.new_modelWizard.nameModel = ctx.message.text
    await ctx.deleteMessage()
    const tex = `Вы ввели название модели  <b>${ctx.message.text}</b>\nВторое действие:\n<b>ВВОДИМ СТОИМОСТЬ (ЦЕНА в рублях)</b>
    \nК примеру <b>"5500"</b>`
	await ctx.replyWithHTML(tex);
    return ctx.wizard.next();
}catch(e){console.log('modelPrice', e)}
})
/////////////////////////modelProperty//////////////////////////////////////////////////////////
const modelText = new Composer()
modelText.on('text', async (ctx)=>{

	try{
    ctx.wizard.state.new_modelWizard.priceModel = ctx.message.text
    await ctx.deleteMessage()
    const tex = `Вы ввели цену за модель в рублях  <b>${ctx.message.text}</b>\nТретье действие:\n<b>ВВОДИМ СВОЙСТВО МОДЕЛИ</b>
    \nК примеру <b>"Рубашка из льна"</b>`
	await ctx.replyWithHTML(tex);
    return ctx.wizard.next();
		}catch(e){console.log('modelProperty', e)}

     


})
/////////////////////////modelTytle//////////////////////////////////////////////////////////
// const modelTytle = new Composer();
// modelTytle.on('text', async (ctx)=>{
//     try{
//     ctx.wizard.state.new_modelWizard.propertyModel = ctx.message.text
//     await ctx.deleteMessage()
//     const tex = `Вы ввели свойство модели <b>${ctx.message.text}</b> 
//     \nТретье действие:\n<b>ВВОДИМ НАЗВАНИЕ КОЛЛЕКЦИИ</b>
//     \n К примеру <b>Модель колекции "ЛЕТО 2024"</b>`
// 	await ctx.replyWithHTML(tex);
//     return ctx.wizard.next()
// }catch(e){console.log('modelTytle', e)}
// })
/////////////////////////modelText//////////////////////////////////////////////////////////
// const modelText = new Composer()
// modelText.on('text', async (ctx)=>{
//     try{
//     ctx.wizard.state.new_modelWizard.tytleModel = ctx.message.text
//     await ctx.deleteMessage()
//     const tex = `Вы ввели Название коллекции модели <b>${ctx.message.text}</b> 
//     \n Четвертое действие:\n<b>ВВОДИМ ОПИСАНИЕ МОДЕЛИ</b>
//     \n К примеру <b>"Летняя рубашка широкого кроя с короткими руковами.  Сшита из качественного льна турецкого производства. С использованием брендовой фурнитуры."</b>`
// 	await ctx.replyWithHTML(tex);
//     return ctx.wizard.next()
// }catch(e){console.log('modelText', e)}
// })
/////////////////////////modelPhoto1//////////////////////////////////////////////////////////
const modelPhoto1 = new Composer()
modelPhoto1.on('text', async (ctx)=>{
    try{
    ctx.wizard.state.new_modelWizard.textModel = ctx.message.text
    await ctx.deleteMessage()
    const tex = `Вы ввели описание модели <b>${ctx.message.text}</b>\nЧетвертое действие:\n <b>ОТПРАВЛЯЕМ ПЕРВОЕ ФОТО ВАШЕЙ МОДЕЛИ</b>
    \n <b>=> Отправьте заранее подготовленное фото Вашей модели</b>
    \nИли Вы можете с фотографировать изображение Вашей модели`
	await ctx.replyWithHTML(tex);
    return ctx.wizard.next()
}catch(e){console.log('modelText', e)}
})
/////////////////////////modelPhoto2//////////////////////////////////////////////////////////
const modelPhoto2 = new Composer()
modelPhoto2.on('photo', async (ctx)=>{
    try{
        ctx.wizard.state.new_modelWizard.photoModel1 = ctx.message.photo[3].file_id
    await ctx.deleteMessage()
    const tex = `Вы отправили первое фото\nПятое действие:\n <b>ОТПРАВЛЯЕМ ВТОРОЕ ФОТО ВАШЕЙ МОДЕЛИ</b>
    \n <b>=> Отправьте заранее подготовленное фото Вашей модели</b>
    \nИли Вы можете с фотографировать изображение Вашей модели`
	await ctx.replyWithHTML(tex);
    return ctx.wizard.next()
}catch(e){console.log('modelText', e)}
})
/////////////////////////modelPhoto3//////////////////////////////////////////////////////////
const modelPhoto3 = new Composer()
modelPhoto3.on('photo', async (ctx)=>{
    try{
        ctx.wizard.state.new_modelWizard.photoModel2 = ctx.message.photo[3].file_id
    await ctx.deleteMessage()
    const tex = `Вы отправили второе фото\nШестое действие:\n <b>ОТПРАВЛЯЕМ ТРЕТЬЕ ФОТО ВАШЕЙ МОДЕЛИ</b>
    \n <b>=> Отправьте заранее подготовленное фото Вашей модели</b>
    \nИли Вы можете с фотографировать изображение Вашей модели`
	await ctx.replyWithHTML(tex);
    return ctx.wizard.next()
}catch(e){console.log('modelText', e)}
})
/////////////////////////modelPhoto4//////////////////////////////////////////////////////////
const modelPhoto4 = new Composer()
modelPhoto4.on('photo', async (ctx)=>{
    try{
        ctx.wizard.state.new_modelWizard.photoModel3 = ctx.message.photo[3].file_id
    await ctx.deleteMessage()
    const tex = `Вы отправили первое фото\nСедьмое действие:\n <b>ОТПРАВЛЯЕМ ЧЕТВЕРТОЕ ФОТО ВАШЕЙ МОДЕЛИ</b>
    \n <b>=> Отправьте заранее подготовленное фото Вашей модели</b>
    \nИли Вы можете с фотографировать изображение Вашей модели`
	await ctx.replyWithHTML(tex);
    return ctx.wizard.next()
}catch(e){console.log('modelText', e)}
})
/////////////////////////modelPhoto4//////////////////////////////////////////////////////////
const modelPhoto5 = new Composer()
modelPhoto5.on('photo', async (ctx)=>{
    try{
        ctx.wizard.state.new_modelWizard.photoModel4 = ctx.message.photo[3].file_id
    await ctx.deleteMessage()
    const tex = `Вы отправили вторе фото\nВосьмое действие:\n <b>ОТПРАВЛЯЕМ ПЯТОЕ ФОТО ВАШЕЙ МОДЕЛИ</b>
    \n <b>=> Отправьте заранее подготовленное фото Вашей модели</b>
    \nИли Вы можете с фотографировать изображение Вашей модели`
	await ctx.replyWithHTML(tex);
    return ctx.wizard.next() 
}catch(e){console.log('modelText', e)}
})
/////////////////////////finSay//////////////////////////////////////////////////////////
const finSay = new Composer()
finSay.on('photo', async (ctx)=>{
    try{
        console.log(ctx.message.photo)
    ctx.wizard.state.new_modelWizard.photoModel5 = ctx.message.photo[3].file_id
    await ctx.deleteMessage()
const tex = `<b>ВЫ ВЫБРАЛИ СЛЕДУЮЩИЕ ПОЗИЦИИ</b><b>\nНазвание </b>${ctx.wizard.state.new_modelWizard.nameModel}<b>\nОписание</b> ${ctx.wizard.state.new_modelWizard.textModel}\n<b>${ctx.wizard.state.new_modelWizard.priceModel}</b> руб.` 
        let media=[
            {type: "photo", media: `${ctx.wizard.state.new_modelWizard.photoModel1}`, caption:`${tex}`, parse_mode:'HTML'},
            {type: "photo", media: `${ctx.wizard.state.new_modelWizard.photoModel2}`},
            {type: "photo",media: `${ctx.wizard.state.new_modelWizard.photoModel3}`},
						{type: "photo",media: `${ctx.wizard.state.new_modelWizard.photoModel4}`},
						{type: "photo",media: `${ctx.wizard.state.new_modelWizard.photoModel5}`}
            ]
          
            ctx.replyWithMediaGroup(media); 
            await ctx.replyWithHTML(`<b>ПРОВЕРТЕ ПРАВИЛЬНОСТЬ И СООТВЕСТВЕННО НАЖМИТЕ</b>\n`, 
            Markup.inlineKeyboard([[Markup.button.callback('ВСЁ ВЕРНО','model_yep')],[Markup.button.callback('НЕВЕРНО НАЧАТЬ ВНОВЬ','model_no')]]));
            return ctx.wizard.next()
}catch(e){console.log('finSay', e)}
})
///////////////////////////callbac model_yep///////////////////////////////////////////////////////////////
const messenger = new Composer()
messenger.action('model_yep', async (ctx)=>{
    try{ await ctx.deleteMessage()
        const modeldata = Model_table.build({
              name_model:ctx.wizard.state.new_modelWizard.nameModel,
              text_model:ctx.wizard.state.new_modelWizard.textModel,
              photo_model_1:ctx.wizard.state.new_modelWizard.photoModel1,
              photo_model_2:ctx.wizard.state.new_modelWizard.photoModel2,
              photo_model_3:ctx.wizard.state.new_modelWizard.photoModel3,
							photo_model_4:ctx.wizard.state.new_modelWizard.photoModel4,
							photo_model_5:ctx.wizard.state.new_modelWizard.photoModel5,
              activ_marq:'passiv',
              vision_marq:1,
              sale_marq:1,
              price:ctx.wizard.state.new_modelWizard.priceModel,
                                         })
                modeldata.save().then(res=>{
                          ctx.answerCbQuery()
                          ctx.replyWithHTML(`<b>ПОЗДРАВЛЯЮ У ВАС ВСЕ ПОЛУЧИЛОСЬ</b>\n Теперь можно продолжать дальше`, 
                          Markup.keyboard([['НА ГЛАВНУЮ']]).oneTime().resize())
                                        })
             return ctx.scene.leave();
        }catch(e){console.log('model_yep', e)}
                   })
/////////////////////////callbac model_nop//////////////////////////////////////////////////////////
messenger.action('brend_no', async (ctx)=>{
    try{
    await ctx.deleteMessage()
    ctx.replyWithHTML(
        `<b>ОЧЕНЬ ЖАЛЬ ЧТО НЕ СРАЗУ ВСЕ ПОЛУЧИЛОСЬ</b>`,
        Markup.keyboard([['СОЗДАТЬ МОДЕЛЬ','МОИ МОДЕЛИ'],['МОЙ БРЕНД','НА ГЛАВНУЮ']]).oneTime().resize())
    return ctx.scene.leave();
}catch(e){console.log('model_nop', e)}
})





const new_modelScene = new Scenes.WizardScene('new_modelWizard', modelName, modelPrice, modelText, modelPhoto1, modelPhoto2, modelPhoto3, modelPhoto4, modelPhoto5, finSay, messenger)


module.exports = new_modelScene