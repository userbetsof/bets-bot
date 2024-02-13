const TelegramBot = require('node-telegram-bot-api');
const token = '6055776005:AAGPEEGBcTlKNgKkee1CEUmdAyhBiCvnciw';
const bot = new TelegramBot(token, {polling: true});

const keyboard = [
    [
      {
        text: 'РҐРѕС‡Сѓ РєРѕС‚Р°',
        callback_data: 'moreKeks'
      }
    ],
    [
        {
          text: 'РҐРѕС‡Сѓ РїРµСЃРёРєР°',
          callback_data: 'morePes'
        }
    ],
    [
        {
          text: 'РҐРѕС‡Сѓ РїСЂРѕС…РѕРґРёС‚СЊ РєСѓСЂСЃС‹',
          url: 'https://htmlacademy.ru/continue'
        }
      ]
  ];

  bot.onText(/(.+)/, (msg, match) => {
    const chatId = msg.chat.id;
if(msg.text === '/menu'){
    bot.sendMessage(chatId, 'menu', {
        reply_markup: {
            inline_keyboard: keyboard
        }
    });
}
if(msg.text === '/stats'){
    bot.sendMessage(chatId, 'stats', {
    });
}
if(msg.text === '/champs'){
    bot.sendMessage(chatId, 'champs', {
    });
}
if(msg.text === '/start'){
    bot.sendMessage(chatId, 'start', {
    });
}
  });

bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;

    let img = '';

    if (query.data === 'moreKeks') { // РµСЃР»Рё РєРѕС‚
        img = 'keks.png';
    }

    if (query.data === 'morePes') { // РµСЃР»Рё РїС‘СЃ
        img = 'pes.png';
    }

    if (img) {
        bot.sendPhoto(chatId, img, { // РїСЂРёРєСЂСѓС‚РёРј РєР»Р°РІСѓ
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    } else {
        bot.sendMessage(chatId, 'РќРµРїРѕРЅСЏС‚РЅРѕ, РґР°РІР°Р№ РїРѕРїСЂРѕР±СѓРµРј РµС‰С‘ СЂР°Р·?', { // РїСЂРёРєСЂСѓС‚РёРј РєР»Р°РІСѓ
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    }
  });