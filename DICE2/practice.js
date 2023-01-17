let newgame = document.querySelector('.btn--new');
let diceRoll_btn = document.querySelector('.btn--roll');
let hold_btn = document.querySelector('.btn--hold');
let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');
let total_score_player1 = document.querySelector('#score--0');
let total_score_player2 = document.querySelector('#score--1');
let current_score_player1 = document.querySelector('#current--0');
let current_score_player2 = document.querySelector('#current--1');
let dice = document.querySelector('.dice');
let player_active = document.querySelector('.player--active');

let play = true;
let current_score = 0;
let active_player = 0;
let score = [0, 0]
dice.classList.add('hidden');

diceRoll_btn.addEventListener('click', function () {
    if (play) {
        let number = Math.floor(Math.random() * 6 + 1);
        dice.classList.remove('hidden');
        dice.src = `./images/dice-${number}.png`;
        if (number !== 1) {
            current_score += number;
            // console.log(current_score)
            document.getElementById(`current--${active_player}`).innerHTML = current_score;
        }
        else {
            current_score = 0;
            document.getElementById(`current--${active_player}`).innerHTML = 0;
            player1.classList.toggle('player--active');
            player2.classList.toggle('player--active');
            (active_player === 0 ? active_player = 1 : active_player = 0)
        }
    }

})
hold_btn.addEventListener('click', function () {
    if (play) {
        score[active_player] += current_score;
        // console.log(score[active_player])
        if (score[active_player] >= 20) {
            console.log(score[active_player])
            player1.classList.remove('player--active');
            player2.classList.remove('player--active');
            document.getElementById(`score--${active_player}`).innerHTML = score[active_player];
            document.querySelector(`.player--${active_player}`).classList.add('player--winner');
            play = false;
            dice.classList.add('hidden');
        }
        else {
            document.getElementById(`score--${active_player}`).innerHTML = score[active_player];
            current_score = 0;
            document.getElementById(`current--${active_player}`).innerHTML = 0;
            player1.classList.toggle('player--active');
            player2.classList.toggle('player--active');
            (active_player === 0 ? active_player = 1 : active_player = 0)

        }
    }
})

newgame.addEventListener('click',function(){
    document.querySelector(`.player--${active_player}`).classList.remove('player--winner');
    dice.classList.add('hidden');
    score=[0,0];
    active_player=0;
    current_score=0;
    play=true;
    total_score_player1.innerHTML=0;
    total_score_player2.innerHTML=0;
    current_score_player1.innerHTML=0;
    current_score_player2.innerHTML=0;
    
    player1.classList.add('player--active');
    player2.classList.remove('player--active')

})