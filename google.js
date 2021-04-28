// google js file -

var quotes = [
    "Not everything that is face can be changed but nothing can be changed unto it is face - James Baldwin",
    "Love takes off the masks we fear we cannot live without and know we cannot live within - James Baldwin",
    "You have to decide who you are and force the world to deal with you, not with its idea of you. - James Baldwin",
    "It is certain, in any case, that ignorance, allied with power, is the most ferocious enemy justice can have. - James Baldwin",
    "Precisely at the point when you begin to develop a conscience, you must find yourself at war with your society. - James Balwin",
    "To be a Negro in this country and to be relatively conscious is to be in a rage almost all the time. - James Baldwin",
    "We May Encounter Many Defeats But We Must Not Be Defeated. - Maya Angelou"
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}