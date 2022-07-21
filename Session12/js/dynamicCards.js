{/* <div class="col">
    <div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
</div> */}

const albumes = [
        {
          "albumId": 1,
          "id": 1,
          "title": "This Love",
          "url": "https://via.placeholder.com/600x300/92c952",
          "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        },
        {
          "albumId": 1,
          "id": 2,
          "title": "Wont Go Home Without You",
          "url": "https://via.placeholder.com/600x300/771796",
          "thumbnailUrl": "https://via.placeholder.com/150/771796"
        },
        {
          "albumId": 1,
          "id": 3,
          "title": "She Will Be Love",
          "url": "https://via.placeholder.com/600x300/24f355",
          "thumbnailUrl": "https://via.placeholder.com/150/24f355"
        },
        {
          "albumId": 1,
          "id": 4,
          "title": "Cant Stop",
          "url": "https://via.placeholder.com/600x300/d32776",
          "thumbnailUrl": "https://via.placeholder.com/150/d32776"
        },
        {
          "albumId": 1,
          "id": 5,
          "title": "Harder To Breathe",
          "url": "https://via.placeholder.com/600x300/f66b97",
          "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
        },
        {
          "albumId": 1,
          "id": 6,
          "title": "Sweetest Goodbye",
          "url": "https://via.placeholder.com/600x300/56a8c2",
          "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
        },
        {
          "albumId": 1,
          "id": 7,
          "title": "Tangled",
          "url": "https://via.placeholder.com/600x300/b0f7cc",
          "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
        },
        {
          "albumId": 1,
          "id": 8,
          "title": "Never Gonna Leave This Bed",
          "url": "https://via.placeholder.com/600x300/54176f",
          "thumbnailUrl": "https://via.placeholder.com/150/54176f"
        },
        {
          "albumId": 1,
          "id": 9,
          "title": "Goodnight Goodnight",
          "url": "https://via.placeholder.com/600x300/51aa97",
          "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
        },
        {
          "albumId": 1,
          "id": 10,
          "title": "Just A Feeling",
          "url": "https://via.placeholder.com/600x300/810b14",
          "thumbnailUrl": "https://via.placeholder.com/150/810b14"
        }
]

/*WHEN USING QUERYSELECTOR BE SURE TO GET A CLASS THAT IS PERSONALIZED AND DONT GRAB A BOOTSTRAP CLASS OR SOMETHING OR GRAB AN ID */
/* Reduce takes 4 parameters and we also have to initialize its value at de end*/ 

let album = document.getElementById("albums")
// let template = albumes.reduce((acc, cv, index, array)=>{
//     acc += `<div class="col">
//     <div class="card">
//         <img src="${cv.url}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">${cv.id}</h5>
//             <p class="card-text">${cv.title}</p>
//     </div>
// </div>`

//     return acc
// }, "")

/*USING FOR EACH */
let template = ""

albumes.forEach((cv)=>{
    template += `<div class="col">
        <div class="card">
            <img src="${cv.url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${cv.id}</h5>
                <p class="card-text">${cv.title}</p>
        </div>
    </div>
    `
})

console.log(template)

album.innerHTML = template