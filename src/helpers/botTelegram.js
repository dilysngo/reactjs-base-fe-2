import axios from 'axios';

const botToken = process.env.BOT_TOKEN || '1459970605:AAHlJGMGe9iX4_u_PXYbmIzWnaQ4wikRZvw';
const groupChatId = process.env.BOT_ID || '-487829484';
const projectName = process.env.PROJECT_NAME || 'JSB Fund';

export const sendToTelegram = (value) => {
  try {
    const text = `${projectName}: ${value}`;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${groupChatId}&text=${text}`;
    return axios.get(url);
  } catch (error) {
    console.log(error);
  }
};

export default sendToTelegram;
