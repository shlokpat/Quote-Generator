var quoteDiv = document.getElementById('quote')

var request = new XMLHttpRequest()

request.open('GET', 'https://quotes.rest/qod', true)

request.onload = function() {
    var quoteData = JSON.parse(request.responseText)
    
    renderHTML(quoteData)

    console.log(quoteData)

    console.log(quoteData.contents.quotes[0].quote)

    console.log(quoteData.contents.quotes[0].author)



}

request.send()

function renderHTML(data) {
    var quote = data.contents.quotes[0].quote
    var author = data.contents.quotes[0].author

    var quoteText = document.createElement('h2')
    quoteText.innerHTML = '"' + quote + '"'
    var authorText = document.createElement('h2')
    authorText.innerHTML = '- ' + author

    quoteDiv.appendChild(quoteText)
    quoteDiv.appendChild(authorText)
    
}
