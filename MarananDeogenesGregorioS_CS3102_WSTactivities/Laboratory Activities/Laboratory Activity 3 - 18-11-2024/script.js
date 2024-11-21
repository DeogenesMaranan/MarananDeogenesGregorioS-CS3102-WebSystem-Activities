const textInput = document.getElementById('textInput');
const wordCountDisplay = document.getElementById('wordcount');
const sentenceCountDisplay = document.getElementById('sentenceCount');

textInput.addEventListener('input', () => {
    const text = textInput.value.trim();
    const words = text.split(/\s+/).filter(word => word && !/^[.,!?]+$/.test(word));
    wordCountDisplay.textContent = `Words: ${words.length}`;

    const sentences = text.split(/[.!?]+[\s\n]*/).filter(sentence => sentence.trim());
    sentenceCountDisplay.textContent = `Sentences: ${sentences.length}`;
});

const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    sunIcon.style.display = body.classList.contains('dark-mode') ? 'none' : 'block';
    moonIcon.style.display = body.classList.contains('dark-mode') ? 'block' : 'none';
});

const floatingWordsContainer = document.createElement('div');
floatingWordsContainer.classList.add('floating-words');
document.body.appendChild(floatingWordsContainer);

const words = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Backend', 'Frontend', 'API', 'WebSocket', 'AJAX', 'Database', 'SQL', 'NoSQL', 'JSON', 'XML', 'CSS3', 'Bootstrap', 'Framework', 'Server', 'Client', 'Router', 'URL', 'REST', 'GraphQL', 'Cookie', 'Session', 'Authentication', 'Authorization', 'Git', 'Version Control', 'Deployment', 'Docker', 'Cloud', 'AWS', 'Azure', 'WebAssembly', 'SASS', 'Webpack', 'Babel', 'Responsive', 'SEO', 'UI', 'UX', 'Wireframe', 'Prototype', 'Design', 'Component', 'Microservices', 'DevOps', 'Continuous Integration'];

let activeWords = [];

function generateRandomWord() {
    if (activeWords.length >= 100) return;

    const wordElement = document.createElement('div');
    wordElement.classList.add('floating-word');
    wordElement.textContent = words[Math.floor(Math.random() * words.length)];

    const startX = Math.random() * 100 + 'vw';
    const startY = Math.random() * 100 + 'vh';
    const endX = Math.random() * 100 + 'vw';
    const endY = Math.random() * 100 + 'vh';
    const startRotate = Math.random() * 360 + 'deg';
    const endRotate = Math.random() * 360 + 'deg';

    wordElement.style.setProperty('--start-x', startX);
    wordElement.style.setProperty('--start-y', startY);
    wordElement.style.setProperty('--end-x', endX);
    wordElement.style.setProperty('--end-y', endY);
    wordElement.style.setProperty('--start-rotate', startRotate);
    wordElement.style.setProperty('--end-rotate', endRotate);

    floatingWordsContainer.appendChild(wordElement);

    activeWords.push(wordElement);

    setTimeout(() => {
        activeWords = activeWords.filter(word => word !== wordElement);
        wordElement.remove();
    }, 10000);
}

for (let i = 0; i < 100; i++) {
    generateRandomWord();
}

setInterval(generateRandomWord, 100);
