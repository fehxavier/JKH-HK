// Script para barra de pesquisa universal
document.addEventListener("DOMContentLoaded", () => {
    // Seleciona o input da barra de pesquisa e o botão da lupa
    const searchInput = document.querySelector(".search-input");
    const searchButton = document.querySelector(".search-button");

    // Lista de links válidos para redirecionamento
    const links = {
        "início": "menu.html",
        "produtos": "produtos.html",
        "fornecedores": "fornecedores.html",
        "clientes": "clientes.html",
        "perfil": "perfil.html"
    };

    // Evento de clique no botão da lupa
    searchButton.addEventListener("click", () => {
        const query = searchInput.value.trim().toLowerCase(); // Remove espaços e converte para minúsculas

        // Verifica se o termo pesquisado existe na lista de links
        if (links[query]) {
            window.location.href = links[query]; // Redireciona para o link correspondente
        } else {
            alert("Página não encontrada. Tente pesquisar um dos seguintes: Início, Produtos, Fornecedores, Clientes, Perfil.");
        }
    });

    // Também permite redirecionar ao pressionar Enter na barra de pesquisa
    searchInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            searchButton.click(); // Simula o clique no botão da lupa
        }
    });
});
