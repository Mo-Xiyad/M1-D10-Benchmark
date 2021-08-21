/*        DOM                */

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
const changeHeader = function (event) {
    let head = document.getElementsByTagName('h1')
    head[0].innerHTML = 'I have been changed'
    // let modifyText = 'I have been changed'
    // head.addEventListener("click", modifyText, false);
}

// 35) Write a function to add an extra row to the table

const addNewRow = function () {
    let table = document.getElementById('table')
    let createTR = document.createElement('tr')
    createTR.innerHTML = 'Newly created <tr>'
    table.appendChild(createTR)
}

// 36) Write a function to add the class "test" to each row in the table
const addClassToAllRow = function () {
    let getAllRow = document.getElementsByTagName('tr')
    for (let i = 0; i < getAllRow.length; i++) {
        getAllRow[i].classList.add("test")
    }
}

// 37) Write a function to add a red background to every link in the page

const addRedLink = function () {
    let allLinks = document.getElementsByTagName('a')
    let texttt = 'Hellooo'
    for (links of allLinks) {
        links.style.backgroundColor = "red"
    }

}

// 38) Console log "Page loaded" when the page is correctly loaded

const pageLoaded = function () {
    console.log("YOUR PAGE HAS BEEN FULLY LOADED NOW")
}

// 39) Write a function to add new items to a UL

const addNewli = function () {
    let getUls = document.getElementById("unorderedList")
    let createNewLi = document.createElement('li')
    createNewLi.innerHTML = 'New list Item'
    getUls.appendChild(createNewLi)
}

// 40) Write a function to empty a list

const removeList = function () {
    let list = document.getElementById("unorderedList")
    list.remove()
}


// console.log(`------------------- STARTING EXTRA -------------------`)
/*
EXTRA 

        42) Add a button to hide every image on the page
        43) Add a button to hide and show the table from the page
        44) Write a function to sum every number inside the TD (if the content is numeric)
        45) Delete the last letter from the title each time the user clicks on it
        46) Change a single TD background color when the user clicks on it
        47) Add a button DELETE, on click it should delete a random TD from the page
        48) Add a pink border to a cell when the mouse is over it
        49) Write a function to add a table with 4 rows and 3 columns programmatically
        50) Write a function to remove the table from the page

*/

// 41) Add an eventListener to alert when the mouse is over a link, displaying the URL




window.onload = function () {
    // addClassToAllRow()
    // addRedLink()
    pageLoaded()
}
