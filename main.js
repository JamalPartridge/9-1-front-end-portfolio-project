const url = 'https://valorant-api.com/v1/agents'


fetch(url)
.then((res) => res.json())
.then((resJson) => console.log(resJson))
.catch((err) => console.log(err))