//DOM Element
const quote = document.querySelector(".quote")
const generateQuoteBtn = document.querySelector(".generate-quote-btn") 
const saveQuoteBtn = document.querySelector(".save-quote-btn")

//Variables
let url = "http://api.quotable.io/random"
let quoteID = 1
export let myQuote = []

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
  if(quote){
    quote.textContent = `${data.text} ~ ${data.author}`
  }
 })()


 //This function would call the api for random quote and diplay it when clicked
const generateQuoteBtnHandler = async() => {
  let data = await fetchQuote()
  quote.textContent = `${data.text} ~ ${data.author}`
}

//This function would store the current quote in local storage
const saveQuoteBtnHandler = () => {
  //get the current quote
  let current_quote = quote.textContent;
  //Initialize a new array if no prior quote has been saved or retrive the array with all the saved quotes
  let savedQuotesArray = JSON.parse(localStorage.getItem("savedQuotes")) || []
  //add the new quote to the array
  savedQuotesArray.push(current_quote)
  //now save the updated array back to local storage  
  localStorage.setItem("savedQuotes",JSON.stringify(savedQuotesArray));
}


 //event listeners
if (generateQuoteBtn ){
  generateQuoteBtn.addEventListener("click",generateQuoteBtnHandler)
}

if(saveQuoteBtn){
  saveQuoteBtn.addEventListener("click",saveQuoteBtnHandler)
}
