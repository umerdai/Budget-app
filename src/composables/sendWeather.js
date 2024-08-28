import { ref } from 'vue';
import axios from 'axios';
export async function sendWeatherData(username, weatherData) {
  try{
    const response =await axios.post('http://localhost:3000/auth/sendweatherdata', {
      username,
      weatherData,
    });

  }catch (error) {
    throw new Error('Failed to send weather data', error);
  };
}