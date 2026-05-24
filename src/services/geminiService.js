export const processCodeWithGemini = async (code, token) => {
  // Использование переданного токена напрямую
  const response = await fetch('https://api.gemini.google.com/v3.5/flash', {
    headers: { 'Authorization': `Bearer ${token}` },
    body: JSON.stringify({ prompt: `Исправь ошибки в коде: ${code}` })
  });
  return response.json();
};
