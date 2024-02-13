const TelegramBot = require('node-telegram-bot-api');
const token = '6055776005:AAGPEEGBcTlKNgKkee1CEUmdAyhBiCvnciw';
const bot = new TelegramBot(token, {polling: true});
// Import the functions you need from the SDKs you need
const initializeApp = require('firebase/app');
const getAnalytics = require('firebase/analytics');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClbeAWi2UWa--jE-rHQmFRDdzAOeRBlYw",
  authDomain: "bets-17797.firebaseapp.com",
  projectId: "bets-17797",
  storageBucket: "bets-17797.appspot.com",
  messagingSenderId: "868808532411",
  appId: "1:868808532411:web:aaad617eb6d510157de49e",
  measurementId: "G-FTRF2W4VWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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