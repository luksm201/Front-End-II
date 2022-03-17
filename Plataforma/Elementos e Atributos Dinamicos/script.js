// 1- Adiciona ao cartão, o atributo "class" com o valor "cartao"

let elemento = document.querySelector("#cartao");
elemento.setAttribute("class", "cartao");

// 2- Adicione o atributo "src" à imagem com o valor "https://www.youtube.com/img/desktop/yt_1200.png"

let imagem = document.querySelector("#logo");

imagem.setAttribute("src", "https://www.youtube.com/img/desktop/yt_1200.png")

// 3- Remova a classe "titulo-feio" do título do documento

let titulo = document.querySelector("h1");

titulo.removeAttribute("class");

// 4- Verifique se o link para o YouTube tem o atributo href ou não, e imprima esse resultado no console

let link_youtube = document.querySelector("#link_youtube");

console.log(link_youtube.hasAttribute("href"));

// 5- Capture o valor de href do link do Wikipedia e exiba no console

let link_wikipedia = document.querySelector("#link_wikipedia");



console.log(link_wikipedia.getAttribute("href"))
