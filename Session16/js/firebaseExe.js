//  Crear un usario con AJAX 

// const createUser = (post) => {
//     const httRequest = new XMLHttpRequest()

//     httRequest.onload = (e) => {
//         console.log(e.target.responseText)
//     }

//     httRequest.open("POST", 'https://kodemia-g20-default-rtdb.firebaseio.com/posts.json', false)

//     let userJson = JSON.stringify(user)

//     httRequest.send(userJson)
// }

for (let index = 0; index < 10; index++) {
    const posts = {
        title: `Im a post number ${index + 1}`,
        body: `Im a body ${index +1}`,
        date: "7/27/2022"
    }

    const createUser = (post) => {
        const httRequest = new XMLHttpRequest()
    
        httRequest.onload = (e) => {
            console.log(e.target.responseText)
        }
    
        httRequest.open("POST", 'https://kodetest-jos-default-rtdb.firebaseio.com/posts.json', false)
    
        let userJson = JSON.stringify(post)
    
        httRequest.send(userJson)
    }

    createUser(posts)



    
}
