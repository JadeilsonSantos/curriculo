
const getData = () => {
    let [x] = JSON.parse(localStorage.curriculos).map(curriculo => {
        return curriculo.contato.git
    })
    let $img = document.getElementById("img")
    let user = x.split('/').slice(-1).join('')
    const url = `https://api.github.com/users/${user}`
    fetch(url).then( response=> { return response.json()})
    .then(data => $img.innerHTML = `<img src='${data.avatar_url}'>`)
    .catch(erro => console.log(erro)) 

}
document.getElementById('teste').addEventListener('click', getData) 
