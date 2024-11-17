const {Scenes, Composer, Markup } = require('telegraf')
const Article_table = require('../models/articleModel')
require('dotenv').config();
/////////////////////////articleName //////////////////////////////////////////////////////////
const articleName = new Composer()
articleName.on('text', async (ctx)=>{
	try{ctx.wizard.state.video_articleWizard = {}
			await ctx.deleteMessage()
      const tex = `<b>НАЧИНАЕМ ПРОЦЕС ВВОДА ВАШЕЙ СТАТЬИ</b>\nПервое действие:\n<b>ВВОДИМ ЗАГОЛОВОК СТАТЬИ</b>`
      await ctx.replyWithHTML(tex);
      return ctx.wizard.next()
    }catch(e){console.log('modelName error', e)}
})
///////////////////////////articleText///////////////////////////////////////////////////////////////
const articleText = new Composer()
articleText.on('text', async (ctx)=>{
    try{
      ctx.wizard.state.video_articleWizard.nameAticle = ctx.message.text
      await ctx.deleteMessage()
      const tex = `Вы ввели заголовок статьи  <b>${ctx.message.text}</b>\nВторое действие:\n<b>ВВОДИМ ТЕКСТ СТАТЬИ</b>`
	    await ctx.replyWithHTML(tex);
      return ctx.wizard.next();
    }catch(e){console.log('articleName', e)}
})
/////////////////////////articlePhoto//////////////////////////////////////////////////////////
const articlePhoto = new Composer()
articlePhoto.on('text', async (ctx)=>{
    try{ctx.wizard.state.video_articleWizard.textAticle = ctx.message.text
        await ctx.deleteMessage()
        const tex = `Вы ввели текст статьи <b>${ctx.message.text}</b>\nТретье действие:\n <b>ОТПРАВЛЯЕМ  video ВАШЕЙ СТАТЬИ</b>`
	      await ctx.replyWithHTML(tex);
        return ctx.wizard.next()
       }catch(e){console.log('modelText', e)}
})
/////////////////////////articleVideo//////////////////////////////////////////////////////////
const articleVideo = new Composer()
articleVideo.on('video', async (ctx)=>{
    try{ctx.wizard.state.video_articleWizard.photo1Aticle = ctx.message.video.file_id
        await ctx.deleteMessage()
        const tex = `Вы загрузили video статьи <b>${ctx.message.text}</b>\nЧетвертое действие:\n <b>ОТПРАВЛЯЕМ ВТОРОЕ video ВАШЕЙ СТАТЬИ</b>`
	      ctx.replyWithVideo(ctx.wizard.state.video_articleWizard.photo1Aticle, {caption: tex, parse_mode:'HTML'})
        return ctx.wizard.next()
       }catch(e){console.log('modelText', e)}
})
/////////////////////////finSay//////////////////////////////////////////////////////////
const finSay = new Composer()
finSay.on('video', async (ctx)=>{//console.log(ctx.message.photo.file_id)
    try{ctx.wizard.state.video_articleWizard.photo2Aticle = ctx.message.video.file_id
        await ctx.deleteMessage()
        const tex = `<b>ВЫ ВЫБРАЛИ СЛЕДУЮЩИЕ ПОЗИЦИИ</b><b>\nНазвание </b>${ctx.wizard.state.video_articleWizard.titleAticle}<b>\nОписание</b> ${ctx.wizard.state.video_articleWizard.textAticle}` 
        ctx.replyWithVideo(ctx.wizard.state.video_articleWizard.photo2Aticle, {caption: tex, parse_mode:'HTML'})
			  await ctx.replyWithHTML(`<b>ПРОВЕРТЕ ПРАВИЛЬНОСТЬ И СООТВЕСТВЕННО НАЖМИТЕ</b>\n`, 
			  Markup.inlineKeyboard([[Markup.button.callback('ВСЁ ВЕРНО','article_yes')],[Markup.button.callback('НЕВЕРНО НАЧАТЬ ВНОВЬ','article_no')]]));
			  console.log('finSay cработало')
				return ctx.wizard.next()
			}catch(e){console.log('finSay', e)}
})
///////////////////////////callbac model_yep///////////////////////////////////////////////////////////////
const messenger = new Composer()
messenger.action('article_yes', async (ctx)=>{
	console.log('messenger cработал article_yes')
    try{await ctx.deleteMessage()
        const modeldata = Article_table.build({
				type:'video',
				photo:ctx.wizard.state.video_articleWizard.photo1Aticle,
				video:ctx.wizard.state.video_articleWizard.photo2Aticle,
				title:ctx.wizard.state.video_articleWizard.nameAticle,
				conva:ctx.wizard.state.video_articleWizard.textAticle
       })
        modeldata.save().then(res=>{
        ctx.answerCbQuery()
        ctx.replyWithHTML(`<b>ПОЗДРАВЛЯЮ У ВАС ВСЕ ПОЛУЧИЛОСЬ</b>\n Теперь можно продолжать дальше`, 
        Markup.keyboard([['НА ГЛАВНУЮ']]).oneTime().resize())
        })
        return ctx.scene.leave();
        }catch(e){console.log('article_yes end', e)}
                   })
/////////////////////////callbac model_nop//////////////////////////////////////////////////////////
messenger.action('article_no', async (ctx)=>{
	console.log('messenger cработал article_no')
    try{await ctx.deleteMessage()
        ctx.replyWithHTML(`<b>ОЧЕНЬ ЖАЛЬ ЧТО НЕ СРАЗУ ВСЕ ПОЛУЧИЛОСЬ</b>`,
        Markup.keyboard([['СОЗДАТЬ СТАТЬЮ','ВИДЕО СТАТЬЮ'],['НА ГЛАВНУЮ']]).oneTime().resize())
    return ctx.scene.leave();
}catch(e){console.log('article_no end', e)}
})

const video_articleScene = new Scenes.WizardScene('video_articleWizard', articleName, articleText, articlePhoto,articleVideo , finSay, messenger)

module.exports = video_articleScene