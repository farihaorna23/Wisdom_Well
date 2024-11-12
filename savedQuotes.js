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
    let deleteIcon = document.createElement("i")
    deleteIcon.classList.add("fa-solid", "fa-x","delete-icon")
    quoteContainer.appendChild(textParagraph)
    quoteContainer.appendChild(deleteIcon)
    savedQuotesContainer.appendChild(quoteContainer)
  })

}


