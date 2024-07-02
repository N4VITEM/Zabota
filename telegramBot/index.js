const TelegramBot = require('node-telegram-bot-api')
const dotenv = require('dotenv');
dotenv.config();

const bot = new TelegramBot(`${process.env.API}`, { polling: true });
const url = process.env.WEB_URL;
bot.on('message', async (msg) => {
    await bot.sendMessage(msg.chat.id, "Zabota 2.0 ❤️ умная система для работы с базой пациентов и увеличения выручки клиники \n \n Посмотрите как наша система может помочь Вам в бизнесе.", {
        reply_markup: {
            inline_keyboard: [
                [{text: 'ПОСМОТРЕТЬ', web_app: {url}}]
            ]
        }
    }
    )
})