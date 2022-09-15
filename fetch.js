
fetch(`https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportrait.png`)
    .then((res) => res.blob())
    .then((resblob) => console.log(resblob))
    
    agen