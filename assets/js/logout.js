// Função de logout
function logout() {
    // Aqui você pode adicionar a lógica de logout, como limpar cookies, sessões, etc.
    
    // Exemplo: redirecionar para a página de login
    window.location.href = 'index.html'; // Altere para o caminho da sua página de login
}
// Adicionando o evento de logout ao botão
document.getElementById('logoutBtn').addEventListener('click', logout);
