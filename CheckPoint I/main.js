

let bodyReference = document.querySelector('body')
let changeClassButtonRefernece = document.querySelector('#changeClassButton')

function changeTheme() {

    bodyReference.classList.toggle('dark')

    if( bodyReference.classList.contains('dark') ) {

        changeClassButtonRefernece.innerText = 'mudar tema ☀️'

    } else {

        changeClassButtonRefernece.innerText = 'mudar tema 🌙'

    }

}



let botaoSalvar = document.querySelector("#botaoSalvar");
botaoSalvar.addEventListener('click', function(event){
   console.log("Formulário Enviado")
   let posts = criarPost()
   carregarPosts(posts) 
   event.preventDefault()
})


//armazenar os dados dos inputs em um objeto 


function criarPost () {
    let titulo = document.querySelector("#titulo").value;
    console.log(titulo); 

    let descricao = document.querySelector("#descricao").value;
    console.log(descricao);

    let urlImagem = document.querySelector("#urlImagem").value;
    console.log(urlImagem);
    
    let posts = []

    let post = {
        titulo: titulo,
        descricao: descricao,
        urlImagem: urlImagem
    }

    posts.push(post)

    return posts
}



//iterar e fazer os posts

function carregarPosts(posts){

    mainContentReference = document.querySelector("#mainContent");

    for (let post of posts)
    {
        mainContentReference.innerHTML += 
        `
        <div class="item">
            <img src="${post.urlImagem}">
            <h2>${post.titulo}</h2>
            <p>
                ${post.descricao}
            </p>
        </div>
        `
    }
}




