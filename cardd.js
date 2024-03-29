// Card symbols
const symbols = ['😶‍🌫️','🙄','😏','😣','😥','😮','😴','🥱','😫','😪','😯','🤐','😌','😛','😜'];

// Duplicate symbols to create pairs
const pairs = symbols.concat(symbols);

// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to create cards
function createCards() {
    const container = document.getElementById('card-container');
    const shuffledPairs = shuffle(pairs);
    // Create and append cards 
    shuffledPairs.forEach(symbol => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <div class="card-face card-front"></div>
        <div class="card-face card-back">
            <h1>${symbol}</h1>
        </div>
        `;
        container.appendChild(card);
        card.addEventListener('click', () => flipCard(card));
    });
}

// Flip card function
let flippedCards = [];
let moves = 0;
let score = 0;
let timer;
let startTime;

// Check if the card is not already flipped and less than 2 cards flipped
function flipCard(card) {
    if (!card.classList.contains('flipped') && flippedCards.length < 2) {
        card.classList.add('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
            moves++;
            document.getElementById('moves').textContent = `Moves: ${moves}`;
        }
        // Start timer on first move
        if (moves === 1) {
            startTime = Date.now();
            timer = setInterval(updateTimer, 1000);
        }
    }
}

// Check if flipped cards match
function checkMatch() {
    const [card1, card2] = flippedCards;
    const symbol1 = card1.querySelector('.card-back h1').textContent;
    const symbol2 = card2.querySelector('.card-back h1').textContent;
    // If symbols match, keep them flipped and update score
    if (symbol1 === symbol2) {
        flippedCards = [];
        score += 10; // Increment score for a match
        document.querySelector('.score').textContent = score;
    } else {
        flippedCards.forEach(card => card.classList.remove('flipped'));
        flippedCards = [];
    }
    // If all cards are matched, end the game

    if (document.querySelectorAll('.card').length === 0) {
        clearInterval(timer);
        const end = Date.now();
        const t = Math.floor((end - startTime) / 1000); // Time in seconds
        score += Math.max(300 - t - (moves * 2), 0); // Update score based on time and moves
        alert(`Congratulations! You won in ${moves} moves and ${t} seconds. Your score is: ${score}`);
    }
}

// Update timer function
function updateTimer() {
    const t = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById('timer').textContent = `Time: ${t} seconds`;
}

// Restart function
function restart() {
    // Clear the card container
    document.getElementById('card-container').innerHTML = '';
    document.getElementById('moves').textContent = 'Moves: 0';
    document.getElementById('timer').textContent = 'Time: 0 seconds';
    document.querySelector('.score').textContent = '0';
    clearInterval(timer);
    flippedCards = [];
    moves = 0;
    score = 0;
    createCards();
}

// Call createCards function when the window is loaded
window.onload = function() {
    createCards();
};