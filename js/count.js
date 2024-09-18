let sum = 0;

const count = document.getElementById('count');

// + plus click:

function clickMe(){
    sum += 1;
    count.innerText = sum;
}
// - minus click:

const minusClick = document.getElementById('minus-btn')
    .addEventListener('click',function(){
        sum -= 1;
        count.innerText = sum;
    })





