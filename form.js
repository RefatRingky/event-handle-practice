document.getElementById("total-amount").addEventListener('click',function () {
    const mainIncome = document.getElementById("income");
    const foodBalanceInput = document.getElementById("food-expense");
    const roombalanceInput = document.getElementById("room-expense");
    const travelBalanceInput = document.getElementById("travel-expense");
    const subTotal = parseInt(foodBalanceInput.value) + parseInt(roombalanceInput.value) + 
    parseInt(travelBalanceInput.value);
    const restBalance = parseInt(mainIncome.value) - parseInt(subTotal);
    document.getElementById('sub-total').innerText = subTotal;

    document.getElementById('Total-balance').innerText = restBalance ;

})