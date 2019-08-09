var quoteDiv = document.getElementById('root')

var request = new XMLHttpRequest()

request.open('GET', 'https://quotes.rest/qod', true)

request.onload = function() {
    var quoteData = JSON.parse(request.responseText)
    
    console.log(quoteData)

    console.log(quoteData.contents.quotes[0].quote)

    console.log(quoteData.contents.quotes[0].author)

    var quote = quoteData.contents.quotes[0].quote
    var author = quoteData.contents.quotes[0].author

    quoteDiv.insertAdjacentHTML('beforeend', quote)
    quoteDiv.insertAdjacentHTML('afterEnd', author)

}

request.send()
