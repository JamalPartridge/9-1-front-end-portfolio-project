// const url = 'https://valorant-api.com/v1/agents'
const p = document.querySelector('#fade')
const body = document.querySelector('body')
const form = document.querySelector('form')

const agents = []


form.addEventListener('click', (event) => {
    
    event.preventDefault()
    
    fetch('https://valorant-api.com/v1/agents')
    .then((res) => res.json())
    .then((resJson) => {
        resJson.data.forEach((char) => {
            if(char.fullPortrait != null){
                agents.push(char.fullPortrait)
                console.log(agents)
            }
            // const img = document.querySelector('img')
            
            // function getImage(){
            //     var gen = Math.floor(Math.random() * agents.length)
            //     console.log(gen)
            // }
            
        })
    })
    .catch((err) => console.log(err))
})

