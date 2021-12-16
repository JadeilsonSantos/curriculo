function dadosUsuario(e){
    e.preventDefault();
    
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

function dadosContato(e){
    e.preventDefault()
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

function usuario(){
    const $logradouro = document.querySelector("#logradouro").value
    const $bairro = document.querySelector("#bairro").value
    const $cidade = document.querySelector("#cidade").value
    const $estado = document.querySelector("#estado").value
    const $tecnologia = document.querySelector("#tecnologia").value
    const $idioma = document.querySelector("#idioma").value
    const $objetivo = document.querySelector("#objetivo").value
    const $formacao = document.querySelector("#formacao").value
    const $curso = document.querySelector("#curso").value
    const $experiencia = document.querySelector("#experiencia").value
    let tecnologias = []
    tecnologias.push($tecnologia)
    let idiomas = []
    idiomas.push($idioma)

    let usuario = {
        nome: $nome,
        idade: Math.abs(ano - new Date().getFullYear()), 
        cargo: $cargo,
        contato:{
            telefone: $telefone,
            email: $email,
            git: $github,
            linkedin: $linkedin,  
        },
        //foto: $foto,
        endereco:{
            logradouro: $logradouro,
            bairro: $bairro,
            cidade: $cidade,
            estado: $estado
        },
        tecnologias: tecnologias,
        idiomas: idiomas,
        objetivo: $objetivo,
        formacao: $formacao,
        cursos:$curso,
        experiencias:$experiencia,

    }
    return usuario
}

