//DOM Element
const savedQuotesContainer = document.querySelector('.saved-quotes-container')
const savedQuote = document.querySelector(".saved-quote")
//Variable
let myQuotes = JSON.parse(localStorage.getItem("savedQuotes")) //getting all the quotes saved in local storage


//creating the quotes and displaying it on the page with some css style
if (myQuotes.length > 0){
  myQuotes.forEach((quote) => {
    let quoteContainer = document.createElement("div")
    quoteContainer.classList.add("saved-quote")
    let textParagraph = document.createElement("p")
    textParagraph.textContent = quote;
    quoteContainer.appendChild(textParagraph)
    savedQuotesContainer.appendChild(quoteContainer)
  })

}
