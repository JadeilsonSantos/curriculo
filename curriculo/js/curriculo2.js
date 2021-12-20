
const $conteudo = document.getElementById('conteudo')

async function meuCurriculo() {
    
    //let $foto = document.getElementById('foto')
    let db = await firebase.firestore()
    let dados = await db.collection('curriculos')
    let info = await dados.get()
    let curriculos = []
    info.forEach(x => {
        curriculos.push(x.data())    
    })
    

    /* let f = curriculos.forEach(curriculo => {
        let user = `${(cv.contato.git).split('/').slice(-1).join('')}`
        let url = `https://api.github.com/users/${user}`
        
            fetch(url).then( response=> { return response.json()})
            .then(data => $foto.innerHTML += `<img src='${data.avatar_url}' alt="foto do curriculo" srcset="" class="image">`)
            .catch(erro => console.log(erro)) 
    }) */
    
    /* curriculos.forEach(foto =>{ 
        fetch(url).then( response=> { return response.json()})
        .then(data => $foto += `<img src='${data.avatar_url}' alt="foto do curriculo" srcset="" class="image">`)
        .catch(erro => console.log(erro)) 
}) */



    cv(curriculos)
    
}

async function cv(curriculos){
    

    // Dados Pessoais
    await curriculos.forEach(x => { 
        let $dadosHTML = ''
        
        async function foto(){
            let url = await fetch(`https://api.github.com/users/${(x.contato.git).split('/').slice(-1).join('')}`)
            const dados = await url.json()        
            console.log(x)
            
           
        $dadosHTML = ` 
        <div class="grid">
        <div class="sidebarL">
        <div class="img" id="foto">
        <img src='${dados.avatar_url}' alt="foto do curriculo" srcset="" class="image">
        </div>
        
        <div class="contatos mt-4 ml-3">
            <div class="dadosPessoais">
                <div id="dados">
                <h2>${x.DadosPessoais.nome}</h2>
                <h4>${x.DadosPessoais.cargo}</h4>
                <p>${x.DadosPessoais.idade} Anos
                </div>
                <hr>
                <div class="contato">
                    <h2>Contato</h2>
                    <div id="contato">
                    <ul >
                    <li><i class="fab fa-whatsapp mr-2"></i> ${x.contato.telefone}</li>
                    <li><i class="fas fa-at mr-2"></i> ${x.contato.email}</li>
                    <li><i class="fab fa-github mr-2"></i><a href="${x.contato.git}"> ${x.contato.git}<a/></li>
                    <li><i class="fab fa-linkedin mr-2"></i><a href="${x.contato.linkedin}"> ${x.contato.linkedin}<a/></li>
                    </ul>
                    <hr>
                    <h2>Endereço</h2>
                    <i class="fas fa-map-marker-alt mr-2"></i>${x.endereco.logradouro} - ${x.endereco.bairro}<br>
                    ${x.endereco.cidade} - ${x.endereco.estado}
                    </div>
                </div>
                <hr>
                <div class="tecnologias">
                    <h2>Tecnologias que Domino</h2>                      
                  <ul class="ml-3 list-group" id="tecno">
                    <li class="list-group-item"><i class="far fa-file-code mr-2"></i>${x.tecnologias}</li>
                  </ul>         
                </div>
                <hr>
                <div class="idiomas" >
                    <h2>Idiomas</h2>
                    <ul class="ml-3 list-group" id="idioma">
                    <li class="list-group-item"><i class="fas fa-language mr-2"></i>${x.idiomas}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="sidebarR  m-5">
        <div class="content">                        
            <div class="resumo">
                <div id="objetivo">
                    <h2>OBJETIVO</h2>
                    <p>${x.objetivo}</p>
                </div>
                <hr>
                <div class="formacao">
                    <h2>FORMAÇÃO ACADEMICA</h2>
                    <ul class="mt-4" id="formacao">
                        <li><strong>${x.formacao}</strong></li>
                        <li>${x.entidade}</li>
                        <li>${new Date(x.ano).getFullYear()}</li>
                    </ul> 
                </div>
            </div>
            <hr>
            <div class="cursos">
                <h2>CURSOS COMPLEMENTARES</h2>
                <div class="curso ml-3 mt-4" >
                    <ul class="mt-4" id="cursos">
                    <li><strong>${x.cursos.curso}</strong></li>
                    <li>${x.entidade}</li>
                    <li>${new Date(x.ano).getFullYear()}</li
                    </ul> 
                </div>
              <hr>
                <h2>EXPERIENCIAS</h2>
                <div class="experiencias ml-3 mt-4" >
                     <ul class="mt-4" id="experiencia">
                     <li><strong>${x.empresa}</strong></li>
                     <li>${x.cargo}</li>
                     <li>${new Date(x.anoSaida).getFullYear()}</li>
                    </ul> 
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<hr>                  
      </br> 
            `
            
            $conteudo.innerHTML += $dadosHTML
        }
            foto() 
        })
        
        
        // Foto
        /* info.forEach(foto =>{ 
            user = `${(foto.data().contato.git).split('/').slice(-1).join('')}`
            let url =  `https://api.github.com/users/${user}`
            fetch(url).then( response=> { return response.json()})
            .then(data => $foto.innerHTML = `<img src='${data.avatar_url}' alt="foto do curriculo" srcset="" class="image">`)
            .catch(erro => console.log(erro)) 
    })
    
    // Tecnologias
    let tecno = []
    info.forEach(tecnologia => tecno.push(...tecnologia.data().tecnologias))    
    tecno.forEach(tecnologia => {
        $tecno.innerHTML += `<li class="list-group-item"><i class="far fa-file-code mr-2"></i>${tecnologia}</li>` 
    })

    // Idiomas
    let idiomas = []
    info.forEach(idioma => idiomas.push(...idioma.data().idiomas))    
    idiomas.forEach(idiomas => {
        $idioma.innerHTML += `<li class="list-group-item"><i class="fas fa-language mr-2"></i>${idiomas}</li>` 
    })

    // Objetivo
    info.forEach(obj => {
        $objetivo.innerHTML = `
            <p>${obj.data().objetivo}</p>
        `
    })

    //Formação

    let forms = [] 
    info.forEach(form => forms.push(...form.data().formacao))
    forms.forEach(f =>{
        $formacao.innerHTML = `
        <li><strong>${f.formacao}</strong></li>
        <li>${f.entidade}</li>
        <li>${new Date(f.ano).getFullYear()}</li>
        ` 
    })

    //Cursos
    
    info.forEach(curso => cursos.push(...curso.data().cursos))    
    cursos.forEach(curso => {
        $cursos.innerHTML = `
        <li><strong>${curso.curso}</strong></li>
        <li>${curso.entidade}</li>
        <li>${new Date(curso.ano).getFullYear()}</li>
        ` 
    })
    
    //Experiencia
    
    let experiencias = []
    info.forEach(experiencia => experiencias.push(...experiencia.data().experiencias))    
    experiencias.map(experiencia => {
        $experiencia.innerHTML += `
        <li><strong>${experiencia.empresa}</strong></li>
        <li>${experiencia.cargo}</li>
        <li>${new Date(experiencia.anoSaida).getFullYear()}</li>
        ` 
    }) */

}
