let suggestions = [];

function addSuggestion() {
    const suggestionBox = document.getElementById('suggestionBox');
    const suggestion = suggestionBox.value.trim();

    if (suggestion !== '') {
        suggestions.push(suggestion);
        suggestionBox.value = '';
        
        // Submit form to save suggestion
        document.getElementById('suggestionForm').submit();
    }
}

function displaySuggestions() {
    const suggestionsDiv = document.getElementById('suggestions');
    suggestionsDiv.innerHTML = '';

    for (let suggestion of suggestions) {
        const p = document.createElement('p');
        p.textContent = suggestion;
        suggestionsDiv.appendChild(p);
    }
}

const express = require('express');
const app = express();

app.use(express.json());

app.post('/process', (req, res) => {
    const { text } = req.body;
    
    // Simulating suggestion generation
    const suggestions = [
        `Suggestion ${Math.floor(Math.random() * 10)}`,
        `Another suggestion`,
        `Yet another one`
    ];
    
    res.json({ suggestions });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

