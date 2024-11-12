//DOM Element
const savedQuotesContainer = document.querySelector('.saved-quotes-container')
const savedQuote = document.querySelector(".saved-quote")
//Variable
let myQuotes = JSON.parse(localStorage.getItem("savedQuotes")) //getting all the quotes saved in local storage
let deleteIconsList = document.querySelectorAll(".delete-icon")

//this function would delete the selected quote from the page
const deleteIconHandler = (e) => {
  console.log(e)
  //find the targeted quotet's index
  let quoteClassList = e.srcElement.classList
  let quoteIndx = quoteClassList[3]
  //make sure the new quote list doesn't have the deleted quote
  let new_quote_list = myQuotes.filter((_,indx) => {
    return indx != quoteIndx
  })
  //delete the entire quote array from local storage to update with a list of new quotes without the deleted quote
  localStorage.removeItem("savedQuotes")
  localStorage.setItem("savedQuotes",JSON.stringify(new_quote_list))
  //render the new list on the screen
  renderList()
}


//creating the quotes and displaying it on the page with some css style
const renderList  = () => {
  savedQuotesContainer.innerHTML = ""
  myQuotes = JSON.parse(localStorage.getItem("savedQuotes")) //getting all the quotes saved in local storage
  if (myQuotes.length > 0){
    myQuotes.forEach((quote,indx) => {
      let quoteContainer = document.createElement("div")
      quoteContainer.classList.add("saved-quote")
      
      let textParagraph = document.createElement("p")
      textParagraph.textContent = quote;
      
      let deleteIcon = document.createElement("i")
      deleteIcon.classList.add("fa-solid", "fa-x","delete-icon",`${indx}`)
      quoteContainer.appendChild(textParagraph)
      quoteContainer.appendChild(deleteIcon)
      savedQuotesContainer.appendChild(quoteContainer)
    })
  }
}

renderList()

savedQuotesContainer.addEventListener("click", (e) => {
  if(e.target.classList.contains("delete-icon")){
    deleteIconHandler(e)
  }
})

