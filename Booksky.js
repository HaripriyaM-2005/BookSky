var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.querySelector(".add-button")  // This is the line with the issue
var deletepopupbutton = document.getElementById("delete-popup")

addpopupbutton.addEventListener("click", function() {
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})
deletepopupbutton.addEventListener("click", function(event) {
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})
var container=document.querySelector(".container");
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")
addbook.addEventListener("click",function(){
    event.preventDefault()
var div=document.createElement("div")
div.setAttribute("class","book-container")
div.innerHTML = `<h2>${booktitleinput.value}</h2>
<h5>${bookauthorinput.value}</h5>
<p>${bookdescriptioninput.value}</p>
<button onclick="deletebook(event)">Delete</button>`
container.append(div)
booktitleinput.value = '';
bookauthorinput.value = '';
bookdescriptioninput.value = '';
popupoverlay.style.display = "none"
popupbox.style.display = "none"
})
function deletebook(event){
    event.target.parentElement.remove()
}