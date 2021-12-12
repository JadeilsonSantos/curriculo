
// Botoes
const $btnTecnologia = document.getElementById("btnTecnologia")
const $btnIdioma = document.getElementById("btnIdioma")
const $btnFormacao = document.getElementById("btnFormacao")
const $btnCuros = document.getElementById("btnCurso")
const $btnExperiencia = document.getElementById("btnExperiencia")

const $btnCurriculo = document.getElementById("btnCurriculo")

// cadastro dos dados do curriculo

// Dados Pessoais

function dadosPessoais(e){
    e.preventDefault()

    const $nome = document.getElementById("nome").value
    const $dataNascimento = document.getElementById("dataDeNascimento").value
    const ano = new Date($dataNascimento).getFullYear()
    const $cargo = document.getElementById("cargo").value
    const $foto = document.getElementById("foto").value

    const usuario = {
        nome: $nome,
        idade: Math.abs(ano - new Date().getFullYear()),
        cargo: $cargo,
        foto: $foto
    }    
    
    return usuario   
}


// Dados de Contato
function dadosContato(e){
    e.preventDefault()

    const $telefone = document.getElementById("telefone").value
    const $email = document.getElementById("email").value
    const $github = document.getElementById("github").value
    const $linkedin = document.getElementById("linkedin").value

     const contato = {
        telefone: $telefone,
        email: $email,
        git: $github,
        linkedin: $linkedin,  
    }
    /* console.log(contato) */
     return contato 
}


// Dados Endereço
function dadosEndereco(e){
    e.preventDefault()

    const $logradouro = document.getElementById("logradouro").value
    const $cidadeUF = document.getElementById("cidadeUF").value
    const endereco = {
       rua: $logradouro,
       cidadeUF: $cidadeUF,
   }
   /* console.log(endereco) */
    return endereco 
}

//Dados Tecnologias
const arrTecnologias = []
function dadosTecnologia(e){ 
    e.preventDefault()     
    let $tecnologia = document.getElementById("tecnologia").value
    arrTecnologias.push($tecnologia)
    /* console.log(arrTecnologias) */
    document.getElementById("tecnologia").value = ""    
    
}

//Dados idioma
const arrIdioma = []
function dadosIdioma(e){ 
    e.preventDefault();   
    const $idioma = document.getElementById("idioma").value
    arrIdioma.push($idioma) 
    document.getElementById("idioma").value = ""
   /* console.log(arrIdioma) */
}

// objetivo
function dadosObjetivo(e){
    e.preventDefault();   
    const $objetivo = document.getElementById("objetivo").value 
    const objetivo = { 
        objetivo: $objetivo
    }
    document.getElementById("objetivo").value = ""    
   /*  console.log(objetivo) */
    return objetivo
  
}


// Formação
const arrFormacao = []
function dadosFormacao(e){ 
    e.preventDefault();  

    const $formacao = document.getElementById("formacao").value
    const $entidadeFormacao = document.getElementById("entidadeFormacao").value
    const $anoFormacao = document.getElementById("anoFormacao").value
    const formacoes = {
        formacao: $formacao,
        entidade: $entidadeFormacao,
        ano: $anoFormacao
    } 
     arrFormacao.push(formacoes) 

     document.getElementById("formacao").value  = ""
     document.getElementById("entidadeFormacao").value  = ""
     document.getElementById("anoFormacao").value = ""
    /* console.log(arrFormacao) */
}

// Cursos
const arrCurso = []
function dadosCurso(e){   
    e.preventDefault();

    const $curso = document.getElementById("curso").value
    const $entidadeCurso = document.getElementById("entidadeCurso").value
    const $anoCurso = document.getElementById("anoCurso").value
    const cursos = {
        curso: $curso,
        entidadeCurso: $entidadeCurso,
        ano: $anoCurso
    } 
     arrCurso.push(cursos)  
   
     document.getElementById("curso").value = ""
     document.getElementById("entidadeCurso").value = ""
     document.getElementById("anoCurso").value = ""

     /* console.log(arrCurso) */
}

// Experiencia
const arrExperiencia = []
function dadosExperiencia(e){   
    e.preventDefault();

    const $cargoExperiencia = document.getElementById("cargoExperiencia").value
    const $empresa = document.getElementById("empresa").value
    const $anoSaida = document.getElementById("anoSaida").value
    const experiencia = {
        cargo: $cargoExperiencia,
        empresa: $empresa,
        ano: $anoSaida
    } 
     arrExperiencia.push(experiencia)  

     document.getElementById("cargoExperiencia").value = ""
     document.getElementById("empresa").value = ""
     document.getElementById("anoSaida").value = ""
    /* console.log(arrExperiencia) */
 
}

// Dados Curriculo - objeto final
const curriculos = []
function cadCurriculo(e){
  e.preventDefault();
  
    const curriculo = {  
           dadosPessoais: dadosPessoais(e),
           contato: dadosContato(e),
           enderecoCompleto: dadosEndereco(e),
           tecnologias: arrTecnologias,
           idiomas: arrIdioma,
           objetivo: dadosObjetivo(e),
           formacao: arrFormacao,
           cursos: arrCurso,
           experiencia: arrExperiencia
        }
   
    curriculos.push(curriculo)
    
     console.log(curriculos)
    return curriculo
}

$btnTecnologia.addEventListener('click', dadosTecnologia)
$btnIdioma.addEventListener('click', dadosIdioma)
$btnFormacao.addEventListener('click', dadosFormacao)
$btnCuros.addEventListener('click', dadosCurso)
$btnExperiencia.addEventListener('click', dadosExperiencia)
//$btnCurriculo.addEventListener('click', dados)


    