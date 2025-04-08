const kits = [
    { nome: "Kit Acadêmico", descricao: "Curativos, Antissépticos, Analgésicos, Guia rápido de autocuidado.", 
        imagem: 'Kit Academico.jpg',preco: "A partir de R$ 39,90", link: 'https://www.instagram.com/p/DHzEboDPek4/' },
    { nome: "Kit Infantil", descricao: "Bandagens coloridas,Soro Fisiológico, Termômetro digital, Livro interativo.", 
        imagem: 'Kit Infantil.jpg',preco: "A partir de R$ 39,90", link: 'https://www.instagram.com/p/DHzFEzdv47j/' },
    { nome: "Kit Fitness", descricao: "Bandagens, Gel para alivio Muscular, Soluções para pequenos machucados.", 
        imagem: 'Kit Fitness.jpg',preco: "A partir de R$ 39,90", link: 'https://www.instagram.com/p/DHzFh1TP4pH/' },
    { nome: "Kit Idoso", descricao: "Curativo, Termômetro, Aparelho de pressão, Dextro, Medicamento para Diabete.", 
        imagem: 'Kit Idoso.jpg',preco: "A partir de R$ 39,90", link: 'https://www.instagram.com/p/DHzGCKqP6gl/' }
];

const container = document.getElementById("kits-container");

function exibirKits(lista) {
    container.innerHTML = "";
    lista.forEach(kit => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
        <a href="${kit.link}" target="_blank">
            <img src="${kit.imagem}" alt="${kit.nome}">
        </a>
        <h3>${kit.nome}</h3>
        <p>${kit.descricao}</p>
        <p class="price">${kit.preco}</p>
    `;
    container.appendChild(div);
});
}

exibirKits(kits);

document.getElementById("searchInput").addEventListener("input", function() {
    const termo = this.value.toLowerCase();
    const resultados = kits.filter(kit => kit.nome.toLowerCase().includes(termo));
    exibirKits(resultados);
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`);
    this.reset();
});
