let userMoney = 1000;

function userWallet() {
    document.getElementById('wallet').textContent = `Money: ${userMoney}`;
};



function getValue () {
    const input = document.getElementById('bet');
    const value = input.value;
    const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1));
    const userBet = document.getElementById('mybet');
    const betValue = userBet.value;


    if (randomNumber == value) {
        document.getElementById('result').textContent = `Congratulations you won ${betValue}!`
        userMoney += betValue;
        userWallet ()
    } else {
        document.getElementById('result').textContent = `Beter luck next time :')`;
        userMoney -= betValue;
        userWallet ()
    }
};

userWallet ()