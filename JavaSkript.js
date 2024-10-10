let nom = document.getElementById('div')
let input = document.getElementById('Sulton')
let btn = document.getElementById('btn')

let text = ``

btn.addEventListener('click',()=>{
    console.log(input.value);
    text = text + `<p>${input.value}</p>`
    localStorage.setItem('text', text)
    nom.innerHTML = localStorage.getItem('text')
})