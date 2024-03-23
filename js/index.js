import { blogs } from "./blogs.js"

// console.log(blogs)

// blogs.forEach(blog => {
//     console.log(blog)
//     // articleHtml(blog)

// });


// menu: hamburger
document.getElementById("hamburger-menu").addEventListener("click", toggleMenu)

function toggleMenu() {
    document.getElementById("nav").classList.toggle("hidden")
}
// end menu: hamburger

// articles
let html = ""

blogs.forEach(blog => {
    html += articleHtml(blog)
})

function articleHtml(blog) {
    const { image, alt, date, title, content } = blog
    return `<article>
        <img class="blog-img" src="${image}" alt="${alt}">
        <span>${date}</span>
        <h2 class="blog-title">${title}</h2>
        <p class="blog-text">${content}</p>
    </article>`
}

renderArticles()
function renderArticles() {
    document.getElementById("articles-container").innerHTML = html
}

// end articles