
/* User default money value */
let userMoney = 1000;

function userWallet() {

    /* Showing default money to HTML */
    document.getElementById('wallet').textContent = `Money: ${userMoney}`;
};



function getValue () {

    /* getting the user input value from the number input field */
    const input = document.getElementById('bet');
    const value = input.value;

    /* Randomizing numbers for the result from 100 up to 900 */
    const randomNumber = Math.floor(Math.random() * 900 + 100);

    /* Getting the user input value from the bet input field */
    const userBet = document.getElementById('mybet');
    const betValue = userBet.value;

    /* Checking if the user's desired number matched to the generated random number and the user wins */
    if (randomNumber == value) {

        /* Showing the text on the user that they won with their bet value in the div with result ID*/
        document.getElementById('result').textContent 
        = `Congratulations you won ${betValue}!`;

        /* Showing the generated number to the user in the div with numresult ID */
        document.getElementById('numResult').textContent = `Result: ${randomNumber}`;

        /* Multiplying the user's bet value to 600 if they won */
        userMoney += betValue * 600;

        /* Calling userWallet function to update the users wallet value */
        userWallet ()
    } else {

        /* The text will show to the element with result ID if the user lose */
        document.getElementById('result').textContent = `Beter luck next time :')`;

        /* Shoes the generated number to the user in the div with numResult ID */
        document.getElementById('numResult').textContent = `Result: ${randomNumber}`;

        /* decreasing the userMoney from the users betValue */
        userMoney -= betValue;

        /* Update the users money from their view */
        userWallet ()
    }

    /* Not Enough Balance text will show when the user's Money value went down to zero */
    if (userMoney < 0) {
        document.getElementById('wallet').textContent = 'Not Enough Balance';
    }
};

    /* Adding Money Button */
function addMoney() {

    /* Getting the user's input value for the money */
    const plusMoney = document.getElementById('moneyAdd');
    const moneyValue = plusMoney.value;

    /* Addin the users money by the amount they out on the field */
    userMoney += Number(moneyValue);

    /* Updating user wallet */
    userWallet()
};

/* Calling user function to update show the money */
userWallet ()
