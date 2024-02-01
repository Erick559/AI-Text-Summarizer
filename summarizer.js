const axios = require('axios');

// This is the function where the call to the API is made. Returns the summarized text as a string.
async function summarizeText(text) {

    // INSERT CODE SNIPPET FROM POSTMAN BELOW
    let data = JSON.stringify({
        "inputs": text,
        "parameters": {
            "max_length": 100,
            "min_length": 30
        }
    });

    let config = {
        method: 'post',
        url: 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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'
        },
        data: data
    };

    try {
        const response = await axios.request(config);
        return response.data[0].summary_text;
    } catch (err) {
        console.log(err);
    }

}

// This allows the summarizeText function to be accessed outside of this file.
module.exports = summarizeText;