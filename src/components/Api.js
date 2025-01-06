import axios from 'axios';

const API_URL = 'https://api.football-data.org/v2'; // رابط الـ API
const API_KEY = '88e9ff16e5114d8ba0ab6f38d84a4f59'; // مفتاح الـ API الجديد

// جلب الأخبار
export const fetchNews = async () => {
  try {
    const response = await axios.get(`${API_URL}/competitions`, {
      headers: { 'X-Auth-Token': API_KEY },
    });
    console.log('API Response:', response.data); // طباعة البيانات كاملة لمراجعتها في وحدة التحكم
    return response.data; // نعيد الاستجابة بالكامل هنا
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};