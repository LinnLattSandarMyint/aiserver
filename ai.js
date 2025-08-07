  const {GoogleGenAI} = require('@google/genai');
 const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

async function callToAi(prompt) {
    console.log(process.env.GEMINI_API_KEY);
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    config: {
      responseMimeType: "application/json"},
    contents:prompt ,
  });
  return response.text;
}

module.exports= callToAi;