// var counter = 0;
// var cards = [];
// var flipped = [];
// var matched = [];
// var starttime;
// var symbols = ['😍','🥰','😘','😗','😙','😚','😋','😛','😝','😜','🤪','🤨','🧐','🤓','😎'];

// function createCards(){
//     var pairs = symbols.concat(symbols); //Duplicates the array
//     pairs = suffleArray(pairs);
//     var containter = document.getElementById('card-containter');

//     pairs.forEach(function(symbol){
//         var card = document.createElement('div');
//         card.className = 'card'; //creates a new class
//         card.innerHTML = `<div class = 'cardInner'>
//             <div class = 'card-face card-front'></div>
//             <div class = 'card-face card-back'>${symbol}</div>`
//         card.addEventListener('click', function(){
//             if(!card.classList.contains('flipped') && flippedCards.length < 2){
//                 card.classList.add('flipped')

//                 if(flippedCards.length == 2){
//                     checkMatch
//                 }
//             }
//         })
//         containter.appendChild(card)
//         cards.push(card)
//     })
// }

// function checkMatchingCards(){
//     counter ++;
// }

// function shuffleArray(){
    
// }

// window.onload = function() {
//     var card = document.getElementById('card');
//     card.addEventListener('click', function() {
//     card.classList.toggle('flipped');
//     setTimeout(function() {
//         card.classList.remove('flipped');
//       }, 5000); // 5000 milliseconds = 5 seconds
//     });
// };

