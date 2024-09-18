let quotes = [
    {
        quote: "You have to fight to reach your dream. You have to sacrifice and work hard for it.",
        author: "Lionel Messi"
    },
    {
        quote: "I don't have to show anything to anyone. There is nothing to prove.",
        author: "Cristiano Ronaldo"
    },
    {
        quote: "The more difficult the victory, the greater the happiness in winning.",
        author: "Pelé"
    },
    {
        quote: "I always want more. Whether it's a goal, or winning a game, I'm never satisfied.",
        author: "Zlatan Ibrahimović"
    },
    {
        quote: "I learned all about life with a ball at my feet.",
        author: "Ronaldinho"
    }
];

// document.getElementById('new-btn').addEventListener('click',function(){
//     const p = document.getElementById('quote-p')
//     const h2 = document.getElementById('name')

//     const randomIndex = Math.floor(Math.random()*quotes.length)
//     p.innerText = quotes[randomIndex].quote
//     h2.innerText = quotes[randomIndex].author
// })

let lastIndex = -1;

document.getElementById('new-btn').addEventListener('click', function() {
    const p = document.getElementById('quote-p');
    const h2 = document.getElementById('name');

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;

    p.innerText = quotes[randomIndex].quote;
    h2.innerText = quotes[randomIndex].author;
});
