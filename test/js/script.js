
const firebaseConfig = {
    apiKey: "AIzaSyBk97D9AaLWBBrboL3Mp0TX8JuznZmIlKo",
    authDomain: "projeto-curriculo-c58f4.firebaseapp.com",
    projectId: "projeto-curriculo-c58f4",
    storageBucket: "projeto-curriculo-c58f4.appspot.com",
    messagingSenderId: "466592102614",
    appId: "1:466592102614:web:1a09ddcf6387fa41e5b177"
  };

  firebase.initializeApp(firebaseConfig)

/* const $botao1 = document.querySelector("#botao1")
const $botao2 = document.querySelector("#botao2") 
const $botao3 = document.querySelector("#btnPesquisar")
const $btnCurriculo = document.querySelector("#btnCurriculo") */


const usuarios = []

function usuario(){
    const $nome = document.querySelector("#nome").value
    const $cargo = document.querySelector("#cargo").value
    const $email = document.querySelector("#email").value
    const $telefone = document.querySelector("#telefone").value
    const $github = document.querySelector("#github").value
    const $linkedin = document.querySelector("#linkedin").value
    const $foto = document.querySelector("#foto").value
    const $logradouro = document.querySelector("#logradouro").value
    const $cidadeUF = document.querySelector("#cidadeUF").value
    const $tecnologia = document.querySelector("#tecnologia").value
    const $idioma = document.querySelector("#idioma").value
    const $objetivo = document.querySelector("#objetivo").value
    const $formacao = document.querySelector("#formacao").value
    const $curso = document.querySelector("#curso").value
    const $experiencia = document.querySelector("#experiencia").value
    const $dataNascimento = document.querySelector("#dataDeNascimento").value
    const ano = new Date($dataNascimento).getFullYear()
    
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
        experiencias:$experiencia,

    }
    usuarios.push(usuario)
    
    
    /* function cadTec(){
        usuario.tecnologias.push($tecnologia)
    }
    function cadIdioma(){
        usuario.idiomas.push($idioma)
    }
    function cadFormacao(){      
        usuario.formacao.push($formacao)
    }
    function cadCurso(){      
        usuario.formacao.push($curso)
    }
    function cadExp(){
        usuario.experiencias.push($experiencia)
    } */
}

function cadastrar(e){
    e.preventDefault();
    usuario()
    localStorage.usuarios = JSON.stringify(usuarios)    
    
}


function pesquisar(e){
    e.preventDefault();
    let usuarios = JSON.parse(localStorage.usuarios)
    const $pesquisar = Number(document.querySelector("#pesquisar").value)   
    const $tbody = document.querySelector('#aluno') 
    $tbody.innerHTML = ""
    $tbody.innerHTML += `        
    <td>${usuarios[$pesquisar].nome}</td>
    <td>${Math.abs(usuarios[$pesquisar].idade)} Anos</td> 
    <td>
    <button class="btn btn-warning mt-2" id="botao4">Editar</button>
    <button class="btn btn-danger mt-2" id="botao5">Excluir</button>
    </td>        
     ` 
    //return $pesquisar
}

function editar(e){
    e.preventDefault();
    let usuarios = JSON.parse(localStorage.usuarios) 
        let dado = localStorage.getItem(usuarios)
        console.log(dado)

}

function listausuarios(e){
    e.preventDefault()
    
    const $tbody = document.querySelector('#aluno')    
    $tbody.innerHTML = ""
    if(localStorage.length != 0){
        let usuarios = JSON.parse(localStorage.usuarios)
        usuarios.forEach(aluno => {
           $tbody.innerHTML += `        
            <td>${aluno.nome}</td>
            <td>${Math.abs(aluno.idade)} Anos</td> 
            <td>
            <button class="btn btn-warning mt-2" onclick="editar(event)">Editar</button>
            <button class="btn btn-danger mt-2" onclick="deletar(event)">Excluir</button>
            </td>        
             ` 
        }); 
    }else {
        $tbody.innerHTML = "<td>Nenhum Curriculo Cadastrado</td>"
    }
    
}

async function meuCurriculo(){
    //e.preventDefault()

    const $main = document.querySelector("#curriculo")
    let db = await firebase.firestore()
    let curriculo = await db.collection('curriculos')
    let dados = await curriculo.get()

    await dados.forEach(usuario =>{
        let user = (usuario.data().contato.git).split('/').slice(-1).join('')
        if(usuario){
            const imagem = async () => {
                const response = await fetch(`https://api.github.com/users/${user}`)
                const data = await response.json()
                return data.avatar_url
            }
            //let img = imagem().then(i => i)
            //console.log(img)
            $main.innerHTML += `            
            <div class="grid mb-5">
                <div class="sidebarL">
                    <div class="img">
                        <img src="${""}"
                            alt="gatinha" srcset="" class="image">
                    </div>

                    <div class="contatos mt-4 ml-3">
                        <div class="dadosPessoais">
                            <h2>${usuario.data().DadosPessoais.nome}</h2>
                            <h4>${usuario.data().DadosPessoais.cargo}</h4>
                            <p>${usuario.data().DadosPessoais.idade} Anos
                            <hr>
                            <div class="contato">
                                <h2>Contato</h2>
                                <ul >
                                <li><i class="fab fa-whatsapp mr-2"></i> ${usuario.data().contato.telefone}</li>
                                <li><i class="fas fa-at mr-2"></i> ${usuario.data().contato.email}</li>
                                <li><i class="fab fa-github mr-2"></i> ${usuario.data().contato.git}</li>
                                <li><i class="fab fa-linkedin mr-2"></i> ${usuario.data().contato.linkedin}</li>
                                <li><i class="fas fa-map-marker-alt mr-2"></i>${usuario.data().enderecoCompleto.rua} - ${usuario.data().enderecoCompleto.cidadeUF}</li>
                                </ul>
                            </div>
                            <hr>
                            <div class="tecnologias">
                                <h2>Tecnologias que Domino</h2>
                                <ul class="ml-3">
                                    <li><i class="far fa-file-code mr-2"></i>${usuario.data().tecnologias}</li>
                                </ul>
                            </div>
                            <hr>
                            <div class="idiomas">
                                <h2>Idioma</h2>
                                <ul class="ml-3">
                                    <li><i class="fas fa-language mr-2"></i>${usuario.data().idiomas}</li>
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
                                ${usuario.data().objetivo.objetivo}
                                </p>
                            </div>
                            <hr>
                            <div class="formacao">
                                <h2>FORMAÇÃO ACADEMICA</h2>
                                <ul class="mt-4">
                                    <li><strong>${usuario.data().formacao.formacao}</strong></li>
                                    <li>${usuario.data().formacao.entidade}</li>
                                    <li>${usuario.data().formacao.ano}</li>
                                </ul>
                            </div>
                        </div>
                        <hr>
                        <div class="cursos">
                            <h2>CURSOS COMPLEMENTARES</h2>
                            <div class="curso ml-3 mt-4">
                                <ul class="mt-4">
                                    <li><strong>${usuario.data().cursos.curso}</strong></li>
                                    <li>${usuario.data().cursos.entidadeCurso}</li>
                                    <li>${usuario.data().cursos.ano}</li>
                                </ul>
                            </div>
                            <h2>EXPERIENCIAS</h2>
                            <div class="experiencias ml-3 mt-4">
                                <ul class="mt-4">
                                    <li><strong>${usuario.experiencias}</li>
                                    <li>Empresa XPTO</li>
                                    <li>2020 a 2021</li>
                                </ul>
                            </div>
                            <div class="experiencia ml-3 mt-4">
                                <ul class="mt-4">
                                    <li><strong>${usuario.experiencias}</strong></li>
                                    <li>Empresa XPTO</li>
                                    <li>2020 a 2021</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        }else{
            $main.innerHTML = "<h2> Nenhum Curriculo Cadastrado</h2>"
        }
    })
   
}    


function deletar(e){
    e.preventDefault();
    let del = localStorage.getItem('usuarios')
    localStorage.removeItem('usuarios', del)
    console.log(del);
    //localStorage.removeItem(del)
}
 
/* $botao1.addEventListener('click', cadastrar)
 *//* $botao2.addEventListener('click', meuCurriculo)  */
/* $botao3.addEventListener('click', pesquisar)  */ 
//$btnCurriculo.addEventListener('click', meuCurriculo) 

