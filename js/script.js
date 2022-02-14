/******************************************
project 1 - Random Quote Generator
******************************************/

/***
 * `quotes` array
 ***/

const item1 = {
    quote: "Impossible is a word to be found only in the dictionary of fools!",
    source: "Napoleon Bonaparte",
    citation: "BrainyQuote",    
    year: 1821,
};
const item2 = {
    quote: "Sometimes the easiest way to solve a problem is to stop participating in the problem!",
    source: "Albert Einstein",
    citation: "Britannica",    
    year: 1955,
};
const item3 = {
    quote: "Efforts and courage are not enough without purpose and direction!",
    source: "John F. Kennedy",
    citation: "Pinterest",    
    year: 1963,
};
const item4 = {
    quote: "The Science of today is the technology of tomorrow!",
    source: "Edward Teller",
    citation: "BrainyQuote",    
    year: 2003,
};
const item5 = {
    quote: "Life is what happens when you're busy making other plans!",
    source: "John Lennon",
    citation: "Wikipedia",    
    year: 1980,
};
const item6 = {
    quote: "The way to get started is to quit talking and begin doing!",
    source: "Walt Disney",
    citation: "HubSpot",    
    year: 1966,
};
const item7 = {
    quote: "Education is the movement from darkness to light!",
    source: "Allan Bloom",
    citation: "BrainyQuote",    
    year: 1992,
};
const item8 = {
    quote: "I will always choose a lazy person to do a difficult job, because, he will find an easy way to do it!",
    source: "Bill Gates",
    citation: "Pinterest",    
    year: 2010,
};
const item9 = {
    quote: "The secret of success is to do the common thing uncommonly well!",
    source: "John D. Rockefeller Jr.",
    citation: "Twitter",    
    year: 2015,
};
const item10 = {
    quote: "Success is not final; failure is not fatal: It is the courage to continue that counts!",
    source: "Winston S. Churchill",
    citation: "Facebook",    
    year: 1950,
};

const quotes = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10]; 

/***
 * `getRandomQuote` function
 ***/

 function getRandomQuote () {
     const rand = Math.floor(Math.random() * quotes.length);
     return rand;
 }

/***
 * `printQuote` function
 ***/

function printQuote () {
    const num = getRandomQuote();
    const quoteBox = document.querySelector(".quote-box");
    quoteBox.innerHTML =
        `
            <p class="quote">${quotes[num].quote}</p>
            <p class="source">${quotes[num].source}<span class="citation">${quotes[num].citation}</span><span class="year">${quotes[num].year}</span></p>
        `
    ;
}

/***
 * click event listener for the print quote button
 ***/

// caching the dom elements
const loadQuoteBtn = document.querySelector(".load-quote");
loadQuoteBtn.addEventListener("click", function() {
    printQuote();
}); 
