
// Botoes
const $btnTecnologia = document.getElementById("btnTecnologia")
const $btnIdioma = document.getElementById("btnIdioma")
const $btnFormacao = document.getElementById("btnFormacao")
const $btnCuros = document.getElementById("btnCurso")
const $btnExperiencia = document.getElementById("btnExperiencia")

const $btnCurriculo = document.getElementById("btnCurriculo")

// cadastro dos dados do curriculo

// Dados Pessoais

function getDadosPessoais(e){
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
function getDadosContato(e){
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
function getDadosEndereco(e){
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
    
    document.getElementById("tecnologia").value = ""    
    
}

//Dados idioma
const arrIdioma = []
function dadosIdioma(e){ 
    e.preventDefault();   
    const $idioma = document.getElementById("idioma").value
    arrIdioma.push($idioma) 
    document.getElementById("idioma").value = ""
    
}

// objetivo
function getDadosObjetivo(e){
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
    
    
}

// Dados Curriculo - objeto final
const curriculos = []
function cadCurriculo(e){
    e.preventDefault();
    
    const curriculo = {  
        DadosPessoais: getDadosPessoais(e),
        contato: getDadosContato(e),
        enderecoCompleto: getDadosEndereco(e),
           tecnologias: arrTecnologias,
           idiomas: arrIdioma,
           objetivo: getDadosObjetivo(e),
           formacao: arrFormacao,
           cursos: arrCurso,
           experiencia: arrExperiencia
        }
        
        curriculos.push(curriculo)    
    console.log(curriculos)
    cadastrar(e)
}

// cadastrar localmente LOCALSTORAGE
function cadastrar(){
    //e.preventDefault()    
    localStorage.curriculos = JSON.stringify(curriculos)
}
// Funcao Monta Dados Pessoais
function foto(){
    JSON.parse(localStorage.curriculos).map(curriculo => {
        let $foto = document.getElementById('foto')
        $foto.innerHTML = `
        <img src="${curriculo.DadosPessoais.foto}"
        alt="gatinha" srcset="" class="image">
        `
    })
}


function dadosPessoais(){ 

    JSON.parse(localStorage.curriculos).map((curriculo)=> {  
        let $dados = document.getElementById('dados')
        $dados.innerHTML = `
        <h2>${curriculo.DadosPessoais.nome}</h2>
        <h4>${curriculo.DadosPessoais.cargo}</h4>
        <p>Idade: ${curriculo.DadosPessoais.idade} Anos
        `
    })        
}


function contato(){
    JSON.parse(localStorage.curriculos).map((curriculo) => {
        let $contato = document.getElementById('contato')
        $contato.innerHTML = `
        <ul class="ml-3">
            <li><i class="fab fa-whatsapp mr-2"></i></i>${curriculo.contato.telefone}</li>
            <li><i class="fas fa-at mr-2"></i>${curriculo.contato.email}</li>
            <li><i class="fab fa-github mr-2"></i> ${curriculo.contato.git}</li>
            <li><i class="fab fa-linkedin mr-2"></i>${curriculo.contato.linkedin}</li>
            <li><i class="fas fa-map-marker-alt mr-2"></i>${curriculo.enderecoCompleto.rua} - ${curriculo.enderecoCompleto.cidadeUF} </li>
        </ul>        `
    })
    
}

// Funcao Monta Tecnologia
function tecnologias(){    
    let [x] = JSON.parse(localStorage.curriculos).map((x)=> {      
        return x.tecnologias
    })     
    
    x.map(tecnologia => {
        let lista = document.createElement('li')
        let tecno = document.getElementById("tecno").appendChild(lista)
        tecno.innerHTML = `<i class="far fa-file-code mr-2"></i>${tecnologia}`
        //console.log(`<i class="far fa-file-code mr-2"></i>${tecnologia}`)
    })
    
}


// Funcao Monta Idioma
function idioma(){    
    let [idioma] = JSON.parse(localStorage.curriculos).map((idioma)=> {      
        return idioma.idiomas
    })     
    
    idioma.map(idioma => {
        let lista = document.createElement('li')
        let $idioma = document.getElementById("idioma").appendChild(lista)
        $idioma.innerHTML = `<i class="fas fa-language mr-2"></i>${idioma}`
        //console.log(`<i class="far fa-file-code mr-2"></i>${idioma}`)
    })
    
}


function objetivo(){
    JSON.parse(localStorage.curriculos).map(curriculo => {
        let $objetivos = document.getElementById('objetivo')
        $objetivos.innerHTML += `<p>${curriculo.objetivo.objetivo}</p>`
    })
}


function formacao(){
    let [formacao] = JSON.parse(localStorage.curriculos).map(curriculo => {
        return curriculo.formacao
    })

    formacao.map(curriculo => {    
        let $formacao = document.getElementById('formacao')
        $formacao.innerHTML += `
            <li><strong>Curso:</strong> ${curriculo.formacao}</li>
            <li><strong>Entidade Estudantil:</strong> ${curriculo.entidade}</li>
            <li><strong>Ano Graduação:</strong> ${new Date(curriculo.ano).getFullYear()}</li>
         `
    })
}


function cursos(){
    let [cursos] = JSON.parse(localStorage.curriculos).map(curriculo => {
        return curriculo.cursos
    })

    cursos.map(curriculo => {    
        let $cursos = document.getElementById('cursos')
        $cursos.innerHTML += `
        <ul>
            <li><strong>Curso:</strong> ${curriculo.curso}</li>
            <li><strong>Entidade Estudantil:</strong> ${curriculo.entidadeCurso}</li>
            <li><strong>Ano:</strong> ${new Date(curriculo.ano).getFullYear()}</li>
        </ul> 
            `
    })
}


function experiencia(){
    let [experiencia] = JSON.parse(localStorage.curriculos).map(curriculo => {
        return curriculo.experiencia
    })

    experiencia.map(curriculo => {    
        let $experiencia = document.getElementById('experiencia')
        $experiencia.innerHTML += `
        <ul>
            <li><strong>Cargo:</strong> ${curriculo.cargo}</li>
            <li><strong>Empresa:</strong> ${curriculo.empresa}</li>
            <li><strong>Ano:</strong> ${new Date(curriculo.ano).getFullYear()}</li>
        </ul> 
            `
    })
}


function meuCurriculo(){
    dadosPessoais()
    foto()
    contato()
    tecnologias()
    idioma()
    objetivo()
    formacao()
    cursos()
    experiencia()
}















/* function meuCurriculo(){   

    let curriculo = JSON.parse(localStorage.curriculos)
        
    const $main = document.querySelector("#curriculo")
    //$main.innerHTML = ""
    
    if(localStorage.length != 0){
        //console.log(curriculo);
        curriculo.forEach(curriculo => {
            $main.innerHTML += `            
            <div class="grid mb-5">
            <div class="sidebarL">
            <div class="img">
                        <img src="${curriculo.dadosPessoais.foto}"
                            alt="foto Curriculo" srcset="" class="image">
                            </div>
                            
                            <div class="contatos mt-4 ml-3">
                        <div class="dadosPessoais">
                        <h2>${curriculo.dadosPessoais.nome}</h2>
                            <h4>${curriculo.dadosPessoais.cargo}</h4>
                            <p>${curriculo.dadosPessoais.idade} Anos
                            <hr>
                            <div class="contato">
                                <h2>Contato</h2>
                                <ul >
                                <li><i class="fab fa-whatsapp mr-2"></i> ${curriculo.contato.telefone}</li>
                                <li><i class="fas fa-at mr-2"></i> ${curriculo.contato.email}</li>
                                <li><i class="fab fa-github mr-2"></i> ${curriculo.contato.git}</li>
                                <li><i class="fab fa-linkedin mr-2"></i> ${curriculo.contato.linkedin}</li>
                                <li><i class="fas fa-map-marker-alt mr-2"></i>${curriculo.enderecoCompleto.rua} - ${curriculo.enderecoCompleto.cidadeUF}</li>
                                </ul>
                            </div>
                            <hr>
                            <div class="tecnologias">
                                <h2>Tecnologias que Domino</h2>
                                <ul class="ml-3">                    
                                    <li><i class="far fa-file-code mr-2"></i>${curriculo.tecnologias[0]}</li>
                                    <li><i class="far fa-file-code mr-2"></i>${curriculo.tecnologias[1]}</li>
                                    <li><i class="far fa-file-code mr-2"></i>${curriculo.tecnologias[2]}</li>
                                    <li><i class="far fa-file-code mr-2"></i>${curriculo.tecnologias[3]}</li>              
                                </ul>
                            </div>
                            <hr>
                            <div class="idiomas">
                                <h2>Idioma</h2>
                                <ul class="ml-3">
                                <li><i class="fas fa-language mr-2"></i>${curriculo.idiomas}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div class="sidebarR  m-5">
                    <div class="content">
                        
                    <div class="resumo">
                            <div class="objetivo">
                                <h2>OBJETIVO</h2>
                                <p>
                                ${curriculo.objetivo.objetivo}
                                </p>
                                </div>
                            <hr>
                            <div class="formacao">
                                <h2>FORMAÇÃO ACADEMICA</h2>
                                <ul class="mt-4">
                                <li><strong>${curriculo.formacao}</strong></li>
                                <li>Estacio</li>
                                <li>2020</li>
                                </ul>
                                </div>
                                </div>
                                <hr>
                        <div class="cursos">
                            <h2>CURSOS COMPLEMENTARES</h2>
                            <div class="curso ml-3 mt-4">
                            <ul class="mt-4">
                            <li><strong>${curriculo.cursos}</strong></li>
                            <li>Curso em Video</li>
                                    <li>2020</li>
                                </ul>
                            </div>
                            <div class="curso ml-3 mt-4">
                                <ul class="mt-4">
                                <li><strong>${curriculo.cursos}</strong></li>
                                    <li>Curso em Video</li>
                                    <li>2020</li>
                                    </ul>
                            </div>
                            <h2>EXPERIENCIAS</h2>
                            <div class="experiencias ml-3 mt-4">
                                <ul class="mt-4">
                                    <li><strong>${curriculo.experiencias}</li>
                                    <li>Empresa XPTO</li>
                                    <li>2020 a 2021</li>
                                </ul>
                            </div>
                            <div class="experiencia ml-3 mt-4">
                            <ul class="mt-4">
                                    <li><strong>${curriculo.experiencias}</strong></li>
                                    <li>Empresa XPTO</li>
                                    <li>2020 a 2021</li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            `
        })
    }else {
        $main.innerHTML = "<h2>Nenhum Curriculo Cadastrado</h2>"
    }
    
}
 */
    //$btnTecnologia.addEventListener('click', dadosTecnologia)
   /*  $btnIdioma.addEventListener('click', dadosIdioma)
    $btnFormacao.addEventListener('click', dadosFormacao)
    $btnCuros.addEventListener('click', dadosCurso)
    $btnExperiencia.addEventListener('click', dadosExperiencia) */
    //$btnCurriculo.addEventListener('click', dados)





