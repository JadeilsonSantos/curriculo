
const firebaseConfig = {
    apiKey: "AIzaSyBk97D9AaLWBBrboL3Mp0TX8JuznZmIlKo",
    authDomain: "projeto-curriculo-c58f4.firebaseapp.com",
    projectId: "projeto-curriculo-c58f4",
    storageBucket: "projeto-curriculo-c58f4.appspot.com",
    messagingSenderId: "466592102614",
    appId: "1:466592102614:web:1a09ddcf6387fa41e5b177"
  };

  firebase.initializeApp(firebaseConfig)


async function getData(){    
    let $img = document.getElementById("img")
    let db = await firebase.firestore()
    let curriculo = await db.collection('curriculos')
    let dados = await curriculo.get()
    let user = ''
    await dados.forEach(dado => {       
          user = `${(dado.data().contato.git).split('/').slice(-1).join('')}`
    });
     console.log(user)
    
    let url =  `https://api.github.com/users/${user}`
    fetch(url).then( response=> { return response.json()})
    .then(data => $img.innerHTML += `<img src='${data.avatar_url}'>`)
    .catch(erro => console.log(erro)) 

}
document.getElementById('teste').addEventListener('click', getData)  

async function getFoto(){
    let db = await firebase.firestore()
    let curriculo = await db.collection('curriculos')
    let dados = await curriculo.get()
    await dados.forEach(dado => {
        console.log((dado.data().contato.git).split('/').slice(-1).join(''))
        return (dado.data().contato.git).split('/').slice(-1).join('')
    });

} 

//getFoto()