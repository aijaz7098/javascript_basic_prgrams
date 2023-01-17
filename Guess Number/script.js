let num = Math.floor(Math.random() * 20 + 1);
let score = 20;
let guess;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    guess = Number(document.querySelector('.guess').value);
    console.log(num)
    if (!guess) {
        document.querySelector('.message').innerHTML = "Please Slecet any Number Between 1-20"
    }
    else {
        if (guess < num) {
            score--;
            document.querySelector('.score').innerHTML = score;
            document.querySelector('.message').innerHTML = "Number is Low";
            if (score <= 0) {
                document.querySelector('.message').innerHTML = "You have lost the game";
                document.querySelector('body').style.backgroundColor = 'red';
                document.querySelector('.check').disabled = true;
            }

        }
        else if (guess > num) {
            score--;
            document.querySelector('.score').innerHTML = score;
            document.querySelector('.message').innerHTML = "Number is High";
            if (score <= 0) {
                lostgame();
                // document.querySelector('.message').innerHTML = "You have lost the game"
                // document.querySelector('body').style.backgroundColor = 'red';
                // document.querySelector('.check').disabled = true;
            }

        }



        else if (guess == num) {
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').innerHTML = highscore;
            }
            document.querySelector('.message').innerHTML = "Congratulation you have won"
            document.querySelector('body').style.backgroundColor = 'green';
            document.querySelector('.number').innerHTML = guess;
        }

    }
})

document.querySelector('.again').addEventListener('click', function () {
    num = Math.floor(Math.random() * 20 + 1);
    score = 20;
    document.querySelector('.message').innerHTML = "start again";
    document.querySelector('.score').innerHTML = score;
    document.querySelector('body').style.backgroundColor = "";
    document.querySelector('.guess').value = "";
    document.querySelector('.check').disabled = false;
    document.querySelector('.number').innerHTML = "?";

})

function lostgame() {
    document.querySelector('.message').innerHTML = "You have lost the game";
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.check').disabled = true;

}