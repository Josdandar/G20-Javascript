const requestGet = (url) => {
    const httpRequest = new XMLHttpRequest()
    
    let result = []
    httpRequest.onload = (e) => { 
        result = JSON.parse(e.target.responseText)
    }
    
    httpRequest.open("GET", url, false)
    
    httpRequest.send() 

    return result 
}

const post = requestGet('https://dummyjson.com/posts')

console.log(post)