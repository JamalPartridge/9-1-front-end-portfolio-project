const p = document.querySelector('#fade')
const body = document.querySelector('body')
const form = document.querySelector('form')
const div = document.querySelector('.img-container')
const agents = []
const background = []

fetch('https://valorant-api.com/v1/agents')
    .then((res) => res.json())
    .then((resJson) => {
        resJson.data.forEach((char) => {
            if(char.fullPortrait != null){
                agents.push(char.fullPortrait)
            }
            if(char.background != null){
                background.push(char.background)
                console.log(background)
            }
        }) 
    })
    .catch((err) => console.log(err))
    
form.addEventListener('submit', (event) => {
    event.preventDefault()
    getImage()
})

function getImage(){
    const gen = Math.floor(Math.random() * agents.length)
    div.innerHTML = ``
    const img = document.createElement('img')
    img.src = agents[gen]
    img.style.width = '500px'
    div.append(img)
}
    
    