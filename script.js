//DOM Element
const quoteContainer = document.querySelector('.quote-container')
const quote = document.querySelector(".quote")

//Variables
let url = "http://api.quotable.io/random"

//Will fetch a random quote from the api
const fetchQuote = async() => {
  
  let response = await fetch(url)
  let data = await response.json()
  
  return {
    text: data.content,
    author: data.author
  }
}

// This function will automatically call itself only once
(async function(){
  let data = await fetchQuote()
  quote.textContent = `${data.text} ~ ${data.author}`
 })()