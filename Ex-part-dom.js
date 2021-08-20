/*
DOM
        
        
        36) Write a function to add the class "test" to each row in the table
        37) Write a function to add a red background to every link in the page
        38) Console log "Page loaded" when the page is correctly loaded
        39) Write a function to add new items to a UL
        40) Write a function to empty a list
*/

// 31) Get element with ID "container" from the page

let containerWithId = document.getElementById('container')

// 32) Get every "td" from the page

let allTds = document.getElementsByTagName('td')

// 33) Create a cycle that prints the text inside every td of the page

const getInnerText = function () {
    for (let i = 0; i < allTds.length; i++) {
        console.log(allTds[i].innerText)
    }
}
// getInnerText()

// 34) Write a function to change the heading of the page

const changeHeader = function () {
    let head = document.getElementsByTagName('h1')
    head[0].innerHTML = 'I have been changed'
}

// 35) Write a function to add an extra row to the table

const addNewRow = function () {
    let table = document.getElementById('table')
    let createTR = document.createElement('tr')
    createTR.innerHTML = 'Newly created <tr>'
    table.appendChild(createTR)
}





window.onload = function () {

}