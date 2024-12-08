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
