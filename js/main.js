
var noOfImages = 25;

var noOfQuotes = 5400;

randomImageNumber = Math.floor(Math.random()*noOfImages + 1)

randomQuoteNumber = Math.floor(Math.random()*noOfQuotes + 1)

document.getElementById('showcase').style.backgroundImage = "url('../res/images/" + randomImageNumber + ".jpg')"

$.getJSON('res/quotes.json').done(function(data){
    document.getElementById('quote').innerText = data[randomQuoteNumber].quoteText;
    document.getElementById('author').innerText = data[randomQuoteNumber].quoteAuthor;
})
