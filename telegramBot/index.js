const TelegramBot = require('node-telegram-bot-api')
const dotenv = require('dotenv');
dotenv.config();

const bot = new TelegramBot(`${process.env.API}`, {polling: true});

bot.on('message', (msg) => {
    const chatId = msg.chat.id

    bot.sendMessage(chatId, 'hi')
})