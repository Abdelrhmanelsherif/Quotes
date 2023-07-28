

var quote = [
    {quotes:"Be yourself; everyone else is already taken.",
      author:"--Oscar Wilde"},
      {quotes:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      author:"--Albert Einstein"},
      {quotes:"So many books, so little time.",
      author:"--Frank Zappa"},
      {quotes:"A room without books is like a body without a soul.",
      author:"--Marcus Tullius Cicero"},
      {quotes:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
      author:"--Dr. Seuss"},
      {quotes:"You only live once, but if you do it right, once is enough.",
      author:"--Mae West"},
      {quotes:"Be the change that you wish to see in the world.",
      author:"--Mahatma Gandhi"},
      {quotes:"In three words I can sum up everything I've learned about life: it goes on.",
      author:"--Robert Frost"},
]

function addQuote(){
    var num=Math.floor(Math.random()*quote.length)
    console.log(num);

    document.getElementById("quotes").innerHTML=quote[num].quotes;
    document.getElementById("author").innerHTML=quote[num].author;
}