
async function meuCurriculo() {
    let $dados = document.getElementById('dados')
    let $contato = document.getElementById('contato')
    let $tecno = document.getElementById('tecno')
    let $idioma = document.getElementById('idioma')
    let $objetivo = document.getElementById('objetivo')
    let $formacao = document.getElementById('formacao')
    let $cursos = document.getElementById('cursos')
    let $experiencia = document.getElementById('experiencia')
    let $foto = document.getElementById('foto')

    let db = await firebase.firestore()
    let dados = await db.collection('curriculos')
    let info = await dados.get()

    // Dados Pessoais
    await info.forEach(x => {
        $dados.innerHTML += ` 
            <h2>${x.data().DadosPessoais.nome}</h2>
            <h4>${x.data().DadosPessoais.cargo}</h4>
            <p>${x.data().DadosPessoais.idade} Anos`
    })
    // Dados de Contato
    await info.forEach(x => {
        $contato.innerHTML += ` 
        <ul >
            <li><i class="fab fa-whatsapp mr-2"></i> ${x.data().contato.telefone}</li>
            <li><i class="fas fa-at mr-2"></i> ${x.data().contato.email}</li>
            <li><i class="fab fa-github mr-2"></i><a href="${x.data().contato.git}"> ${x.data().contato.git}<a/></li>
            <li><i class="fab fa-linkedin mr-2"></i><a href="${x.data().contato.linkedin}"> ${x.data().contato.linkedin}<a/></li>
            <li><i class="fas fa-map-marker-alt mr-2"></i>${x.data().enderecoCompleto.rua} - ${x.data().enderecoCompleto.cidadeUF}</li>
       </ul>`
    })

    // Foto
    info.forEach(foto =>{ 

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
        $tecno.innerHTML += `<li><i class="far fa-file-code mr-2"></i>${tecnologia}</li>` 
    })

    // Idiomas
    let idiomas = []
    info.forEach(idioma => idiomas.push(...idioma.data().idiomas))    
    idiomas.forEach(idiomas => {
        $idioma.innerHTML += `<li><i class="fas fa-language mr-2"></i>${idiomas}</li>` 
    })

    // Objetivo
    info.forEach(obj => {
        $objetivo.innerHTML += `
            <p>${obj.data().objetivo.objetivo}</p>
        `
    })

    //Formação

    info.forEach(form =>{
        let [f] = form.data().formacao
        $formacao.innerHTML += `
        <li><strong>${f.formacao}</strong></li>
        <li>${f.entidade}</li>
        <li>${new Date(f.ano).getFullYear()}</li>
        `
    })

    //Cursos
    
    let cursos = []
    info.forEach(curso => cursos.push(...curso.data().cursos))    
    cursos.forEach(curso => {
        $cursos.innerHTML += `
        <li><strong>${curso.curso}</strong></li>
        <li>${curso.entidadeCurso}</li>
        <li>${curso.ano}</li>
        ` 
    })
    
    //Experiencia
    
    let experiencias = []
    info.forEach(experiencia => experiencias.push(...experiencia.data().experiencia))    
    experiencias.forEach(experiencia => {
        $experiencia.innerHTML += `
        <li><strong>${experiencia.empresa}</strong></li>
        <li>${experiencia.cargo}</li>
        <li>${new Date(experiencia.ano).getFullYear()}</li>
        ` 
    })

    
    













}
