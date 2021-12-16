function dadosPessoais(e){   
    //e.preventDefault()  
    const $nome = document.querySelector("#nome").value
    const $cargo = document.querySelector("#cargo").value
    const $dataNascimento = document.querySelector("#dataDeNascimento").value
    const ano = new Date($dataNascimento).getFullYear()
    
    return usuario = {
        nome: $nome,
        idade: Math.abs(ano - new Date().getFullYear()), 
        cargo: $cargo,
    }
        
}

/* function radio(){
    //e.preventDefault()
    const $github = document.querySelector("#github")
    let $rdN = document.getElementsByName("git")
    
}
radio() */

function dadosContato(e){
    //e.preventDefault()  
    const $email = document.querySelector("#email").value
    const $telefone = document.querySelector("#telefone").value
    const $github = document.querySelector("#github").value
    const $linkedin = document.querySelector("#linkedin").value
    //const $foto = document.querySelector("#foto").value
    
    return  contato = {
        telefone: $telefone,
        email: $email,
        git: $github,
        linkedin: $linkedin,
    }  
}


function dadosEndereco(e){
    //e.preventDefault()  
    const $logradouro = document.querySelector("#logradouro").value
    const $bairro = document.querySelector("#bairro").value
    const $cidade = document.querySelector("#cidade").value
    const $estado = document.querySelector("#estado").value

    return enedecoCompleto = {
        logradouro: $logradouro,
        bairro: $bairro,
        cidade: $cidade,
        estado: $estado
    }
}

const tecnologias = []
function dadosTecnologia(e){
    e.preventDefault()
    let $tecnologia = document.querySelector("#tecnologia").value
    tecnologias.push($tecnologia)
    console.log(tecnologias)
    document.querySelector("#tecnologia").value = " "
   
}

const idiomas = []
function dadosIdioma(e){
    e.preventDefault()
    let $idioma = document.querySelector("#idioma").value
    idiomas.push($idioma)
    console.log(idiomas)
    document.querySelector("#idioma").value = " "
   
}

const formacao = []
function dadosFormacao(e){
    e.preventDefault()  
    const $formacao = document.querySelector("#formacao").value
    const $entidadeFormacao = document.querySelector("#entidadeFormacao").value
    const $anoFormacao = document.querySelector("#anoFormacao").value
    let dadosFormacao = {
        formacao: $formacao,
        entidade: $entidadeFormacao,
        ano: $anoFormacao
    }

    formacao.push(dadosFormacao)    

}

const cursos = []
function dadosCurso(e){
    e.preventDefault()  
    const $curso = document.querySelector("#curso").value
    const $entidadeCurso = document.querySelector("#entidadeCurso").value
    const $anoCurso = document.querySelector("#anoCurso").value
    let dadosCurso = {
        curso: $curso,
        entidade: $entidadeCurso,
        ano: $anoCurso
    }

    cursos.push(dadosCurso)    

}
const experiencias = []
function dadosExperiencia(e){
    e.preventDefault()  
    const $cargoExperiencia = document.querySelector("#cargoExperiencia").value
    const $empresa = document.querySelector("#empresa").value
    const $anoSaida = document.querySelector("#anoSaida").value
    let dadosExperiencia = {
        cargo: $cargoExperiencia,
        empresa: $empresa,
        anoSaida: $anoSaida
    }

    experiencias.push(dadosExperiencia)    

}

function curriculo(){
    const $objetivo = document.querySelector("#objetivo").value    

    let curriculo = {
        DadosPessoais: dadosPessoais(),
        contato: dadosContato(),
        //foto: $foto,
        endereco: dadosEndereco(),
        tecnologias: tecnologias,
        idiomas: idiomas,
        objetivo: $objetivo,
        formacao: formacao,
        cursos: cursos,
        experiencias: experiencias,

    }
    return curriculo
}

async function cadastrar(){
    let doc = curriculo()
    let docName = String(doc.DadosPessoais.nome)
    let docTel = String(doc.contato.telefone)
    let nome = docName.split('').slice(0, 6).join('').toLocaleLowerCase()
    let tel = docTel.split('').slice(0, 6).join('')
    let nomeTel = nome.concat(tel)
    //console.log(nomeTel)
    const db = firebase.firestore() 
    
    try {
        await db.collection('curriculos').doc(`curriculo-${nomeTel}`).set(curriculo())
        alert('Cadastrado com Sucesso')
    } catch (error) {
        alert('Erro ao Cadastrar')
        console.log(error)
    }  

}

