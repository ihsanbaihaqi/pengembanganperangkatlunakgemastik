const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.use(express.json());

const OPENAI_API_KEY = 'ISI_API_KEY_MU';

app.post('/ask', async(req, res) => {
    const userMessage = req.body.message;

    const apiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userMessage }]
        })
    });

    const data = await apiResponse.json();
    res.json({ reply: data.choices[0].message.content });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));