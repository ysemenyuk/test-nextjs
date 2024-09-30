'use server'
 
import axios from 'axios';

const botToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

export async function send(data: any) {
  console.log('data', data)

  const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await axios.post(telegramUrl, {
        chat_id: chatId,
        text: JSON.stringify(data),
      });

      if (response.data.ok) {
        console.log({ success: true, message: 'Message sent successfully!' });
      } else {
        console.log({ success: false, message: 'Failed to send message.' });
      }
      
    } catch (error) {
      console.log({ success: false, message: 'Error sending message.' });
    }

}
