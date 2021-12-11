// cadastro dos dados do curriculo

// Dados Pessoais
function dadosPessoais(nome, idade, cargo, foto){
    /* let arrUser = [] */
    return usuario = {
        nome: nome,
        idade: idade,
        cargo: cargo,
        foto: foto
    }
   
}

// Dados de Contato
function dadosContato(telefone, email,git,linkedin){
    //let arrContato = []
     const contato = {
        telefone: telefone,
        email: email,
        git: git,
        linkedin: linkedin,  
    }
    return contato
}


// Dados Endereço
function dadosEndereco(rua, num, bairro){
    //let arrEnde = []
    const endereco = {
       rua: rua,
       num: num,
       bairro: bairro,
   }
    return endereco 
}

//Dados Tecnologias
const arrTecnologias = []
function dadosTecnologia(tecnologia){      
    arrTecnologias.push(tecnologia)
    return arrTecnologias
}

//Dados idioma
const arrIdioma = []
function dadosIdioma(idioma){    
    arrIdioma.push(idioma)
    return arrIdioma
}

// objetivo
function dadosObjetivo(objetivo){    
    return objetivo = { objetivo: objetivo}
  
}


// Formação
const arrFormacao = []
function dadosFormacao(formacao, entidade, ano){   
    const formacoes = {
        formacao: formacao,
        entidade: entidade,
        ano: ano
    } 
     arrFormacao.push(formacoes)  
     return arrFormacao
}

// Cursos
const arrCurso = []
function dadosCurso(curso, entidade, ano){   
    const cursos = {
        curso: curso,
        entidade: entidade,
        ano: ano
    } 
     arrCurso.push(cursos)  
     return arrCurso
}

// Experiencia
const arrExperiencia = []
function dadosExperiencia(cargo, empresa, ano){   
    const experiencia = {
        cargo: cargo,
        empresa: empresa,
        ano: ano
    } 
     arrExperiencia.push(experiencia)  
     return arrExperiencia
}






// Dados Curriculo - objeto final
const curriculo = function(dadosUsuario, dadosContato, dadosEndereco, dadosTecnologia, dadosIdioma, dadosObjetivo,dadosFormacao,dadosCurso,dadosExperiencia){
    const curriculo = {  
           dadosPessoais: dadosUsuario,
           contato: dadosContato,
           enderecoCompleto: dadosEndereco,
           tecnologias: dadosTecnologia,
           idiomas: dadosIdioma,
           objetivo: dadosObjetivo,
           formacao: dadosFormacao,
           cursos: dadosCurso,
           experiencia: dadosExperiencia
        }
   
    return curriculo
}

const dados = dadosPessoais('marcelo', 34, 'Analisata de Sistemas','url:imagem da foto')

const contato = dadosContato('85985859595', 'email@email.com','github.com.br','linkedin.com.br')

const endereco = dadosEndereco('Rua das Papoulas', 321, 'Pappulas')


const tecnologia = dadosTecnologia('Javascript')
const tecnologia1 = dadosTecnologia('Java')
const tecnologia2 = dadosTecnologia('BootStrap')

const idioma = dadosIdioma('Igles')
const idioma2 = dadosIdioma('Espanhol')

const objetivo = dadosObjetivo('Emprego na area de programação')

const formacao = dadosFormacao('Analise e Desenvolvimento de Sistemas', 'Estacio', 2020 )

const curso = dadosCurso('Logica de Programação', 'Curso Em Video', 2020 )
const curso1 = dadosCurso('Programação', 'Curso Em Video', 2020 )

const experiencia = dadosExperiencia('Analista TI', 'Xpto S/A', 2015)
const experiencia2 = dadosExperiencia('Desenvolvedor', 'Xpto S/A', 2021)

console.log(curriculo(
    dados, 
    contato, 
    endereco, 
    tecnologia,    
    idioma, 
    objetivo,
    formacao,
    curso,
    experiencia,

    ));


/* nome: $nome,
idade: Math.abs(ano - new Date().getFullYear()), 
cargo: $cargo,
contato:{
    telefone: $telefone,
    email: $email,
    git: $github,
    linkedin: $linkedin,  
},
foto: $foto,
endereco:{
    logradouro: $logradouro,
    cidadeUF: $cidadeUF
},
tecnologias: $tecnologia,
idiomas: $idioma,
objetivo: $objetivo,
formacao: $formacao,
cursos:$curso,
experiencias:$experiencia, */