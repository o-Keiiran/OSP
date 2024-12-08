let suggestions = [];

function addSuggestion() {
    const suggestionBox = document.getElementById('suggestionBox');
    const suggestion = suggestionBox.value.trim();

    if (suggestion !== '') {
        suggestions.push(suggestion);
        suggestionBox.value = '';
        
        // Save to txt file
        saveToTextFile(suggestion);

        // Display suggestion
        displaySuggestions();
    }
}

function saveToTextFile(text) {
    const blob = new Blob([text], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'suggestions.txt';
    a.click();
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
