let userMoney = 1000;

function userWallet() {
    document.getElementById('wallet').textContent = `Money: ${userMoney}`;
};



function getValue () {
    const input = document.getElementById('bet');
    const value = input.value;
    const randomNumber = Math.floor(Math.random() * 900 + 100);
    const userBet = document.getElementById('mybet');
    const betValue = userBet.value;


    if (randomNumber == value) {
        document.getElementById('result').textContent 
        = `Congratulations you won ${betValue}!`;
        document.getElementById('numResult').textContent = `Result: ${randomNumber}`;
        userMoney += betValue * 600;
        userWallet ()
    } else {
        document.getElementById('result').textContent = `Beter luck next time :')`;
        document.getElementById('numResult').textContent = `Result: ${randomNumber}`;
        userMoney -= betValue;
        userWallet ()
    }

    if (userMoney < 0) {
        document.getElementById('wallet').textContent = 'Not Enough Balance';
    }
};

function addMoney() {
    const plusMoney = document.getElementById('moneyAdd');
    const moneyValue = plusMoney.value;

    userMoney += Number(moneyValue);
    userWallet()
};

userWallet ()