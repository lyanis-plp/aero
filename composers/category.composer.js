const {Markup, Composer } = require('telegraf');
const composer = new Composer()
const Model_table = require('../models/madeModel')
const Article_table = require('../models/articleModel')



composer.on('callback_query', async (ctx)=>{  
    ctx.deleteMessage();
    ctx.answerCbQuery();  
    console.log(`колбек category.composer ${ctx.update.callback_query.data}`)
    let arr = ctx.update.callback_query.data.split('*'); // arr[0]    arr[1]    
     


switch (arr[0]) {
	case 'article':
		try{await Article_table.findOne({ where: { id: arr[1]}}).then(elem =>{ 
			 
			let tex = `Статья <b>#${elem.id}</b>\n<b>${elem.title}</b>\n<i>${elem.conva}</i>`
			let media=[
				{type: elem.type, media: `${elem.photo}`, caption:`${tex}`, parse_mode:'HTML'},
				{type: elem.type, media: `${elem.video}`}
			]
			ctx.replyWithMediaGroup(media); 
			 
			});//promis
			ctx.replyWithSticker(process.env.STICKER1, Markup.keyboard([['МОДЕЛИ'],['РАЗМЕРЫ','КАК ЗАКАЗАТЬ'],['ИНТЕРЕСНОЕ'],['НА ГЛАВНУЮ']]).oneTime().resize())
			}catch(e){console.log('article', e)};
	break;

	case 'PASSIV':  //`PASSIV*${arr[1]}`
            try{console.log(`модель пассив ${arr[1]}`)
                const brenddata = {activ_marq:'passiv'}  
							   await Model_table.update(brenddata,{where:{id:arr[1]}}).then(res=>{
								 ctx.replyWithHTML(`Модель ${arr[1]} ПАССИВНАЯ`)})    
                }catch(e){console.log('Colback_УДАЛИТЬ модель', e)};
            break;

	case 'ACTIV': //`ACTIV*${arr[1]}`
		try{console.log(`модель пассив ${arr[2]}`)
                const brenddata = {activ_marq:'activ'}  
							  await Model_table.update(brenddata,{where:{id:arr[1]}}).then(res=>{
							  ctx.replyWithHTML(`Модель ${arr[1]} АКТИВНАЯ`)})    
                }catch(e){console.log('Colback_Активировать модель', e)};
		
		break;
	case 'DELETE': //`DELETE*${arr[1]}`
		try{console.log(`DELETE*${arr[1]}`)
								ctx.scene.enter('priceWizard')
                }catch(e){console.log('Colback_изменить цену', e)};
		
		break;

	default:
		break;
}

});

 















module.exports = composer