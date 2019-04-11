console.log('index.js connected');

// Page components
const components = {}


const buildString = (endpoint, query, mode) => {

    // Building the string
    let queryString = `${endpoint}query="${query}"&mode=${mode}`;
    console.log(queryString);
    return queryString;
}

const pointIframeAt = (url) => {
    components.iFrame.src = url;
}

const main = (e) => {
    e.preventDefault();
    const endpoint = components.endpoint;
    const query = components.queryInput.value;
    const mode = components.mode.value;
    const url = buildString(endpoint, query, mode)
    pointIframeAt(url);
}

window.onload = () => {
    components.queryInput = document.getElementById('query-input');
    components.mode = document.getElementById('mode-input');
    components.submitButton = document.getElementById('submit-button');
    components.iFrame = document.getElementById('iframe');

    // URL building components
    components.endpoint = 'https://api.gdeltproject.org/api/v2/doc/doc?';

    // Event listener
    components.submitButton.addEventListener('click', main);
}
