// API helper functions for Al-Aqsa Medical Lab

const API_BASE_URL = 'https://al-aqsabackend-uokt.onrender.com/api';

/**
 * Send contact form data to backend
 * @param {Object} formData - Contact form data
 * @returns {Promise<Object>} - API response
 */
export async function sendContactMessage(formData) {
  try {
    const response = await fetch(`${API_BASE_URL}/contact/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'حدث خطأ في إرسال الرسالة');
    }

    return data;
  } catch (error) {
    console.error('Error sending contact message:', error);
    throw error;
  }
}

/**
 * Test API connection
 * @returns {Promise<Object>} - API response
 */
export async function testAPIConnection() {
  try {
    const response = await fetch(`${API_BASE_URL}/contact/`, {
      method: 'GET',
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error testing API connection:', error);
    throw error;
  }
}

/**
 * Get API info
 * @returns {Promise<Object>} - API info
 */
export async function getAPIInfo() {
  try {
    const response = await fetch(`${API_BASE_URL}/info/`, {
      method: 'GET',
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error getting API info:', error);
    throw error;
  }
}
