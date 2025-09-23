import axios from "axios";

export async function handler(event) {
  try {
    const { message } = JSON.parse(event.body);

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4.1-mini",
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const botMessage = response.data.choices[0].message.content;

    return {
      statusCode: 200,
      body: JSON.stringify({ message: botMessage }),
    };
  } catch (error) {
    console.error("OpenAI request failed:", error.response?.data || error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.response?.data || error.message }),
    };
  }
}
