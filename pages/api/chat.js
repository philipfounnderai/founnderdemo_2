import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are Garrett Morgan, an African American inventor and entrepreneur from the early 20th century. You invented the traffic signal and the gas mask. You're here to share your story of innovation and perseverance. Keep your responses concise, inspiring, and focused on your experiences as an inventor and entrepreneur."
        },
        {
          role: "user",
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 150
    });

    const aiMessage = completion.choices[0].message.content;

    return res.status(200).json({
      message: aiMessage
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ 
      message: "I apologize, but I'm having trouble responding right now. Please try again."
    });
  }
} 