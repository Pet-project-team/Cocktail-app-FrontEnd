const BASE_URL = 'https://backend';

export const authenticateWithGoogle = async (googleAccessToken) => {
  try {

    const response = await fetch(`${BASE_URL}/auth/google`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ access_token: googleAccessToken }),
    });

    if (!response.ok) {
      throw new Error('Authentication failed');
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error during authentication:', error.message);
    throw error;
  }
};