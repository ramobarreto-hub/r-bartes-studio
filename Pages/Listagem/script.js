const produtos = [
    {
        Id: "01",
        Nome: "Ilustração Digital",
        Discricao: "Aprenda técnicas modernas de ilustração do zero ao avançado.",
        Preco: "R$ 199,00",
        Imgprod: "../../assets/imagen-cursos/ilustracao.png",
        discrImag: "Ilustração Digital",
    },
    {
        Id: "02",
        Nome: "Design Gráfico",
        Discricao: "Criação visual, identidade de marca e projetos criativos.",
        Preco: "R$ 249,00",
        Imgprod: "../../assets/imagen-cursos/desing.png",
        discrImag: "Design Gráfico"
    },
    {
        Id: "03",
        Nome: "Fotografia Criativa",
        Discricao: "Domine enquadramento, luz e edição de imagens.",
        Preco: "R$ 179,00",
        Imgprod: "../../assets/imagen-cursos/Fotografia.jpeg",
        discrImag: "Fotografia Criativa"
    },
    {
        Id: "04",
        Nome: "Pintura Artística",
        Discricao: "Explore cores, texturas e técnicas tradicionais.",
        Preco: "R$ 220,00",
        Imgprod: "../../assets/imagen-cursos/pintura.jpeg",
        discrImag: "Pintura Artística"
    },
    {
        Id: "05",
        Nome: "Animação Digital",
        Discricao: "Crie animações 2D com conceitos profissionais.",
        Preco: "R$ 299,00",
        Imgprod: "../../assets/imagen-cursos/animacao.png",
        discrImag: "Animação Digital"
    }
]
const mostrarmenu = () =>{
    const menumobile = document.getElementById('Menu-drop');

    if(menumobile.style.display == 'none'){
        menumobile.style.display = 'block'
    }
    else{
        menumobile.style.display = 'none'
    }
}


const container = document.querySelector("section");
produtos.forEach(produto => {
    const card = document.createElement("article");
    card.classList.add("card");
    card.innerHTML = `

    <img src= "${produto.Imgprod}" alt="${produto.discrImag}">
                <h2>${produto.Nome}</h2>
                <p class="discriçao-cards">${produto.Discricao}</p>
                <div class="Card-footer">
                    <span class="price">${produto.Preco}</span>
                    <a class="button" href="../Detalhes do produto/index.html">Comprar</a>
                </div>
`;
    container.appendChild(card);
});