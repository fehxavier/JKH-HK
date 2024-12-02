// Objeto para armazenar usuários e senhas
const users = {
    "Admin": "1234",
    "Aluno": "12345"
};

// Função para lidar com o login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtém os valores dos campos de entrada
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('error-message');

    // Verifica se os campos de usuário e senha estão preenchidos
    if (username === "" || password === "") {
        messageElement.textContent = "Por favor, preencha todos os campos.";
        messageElement.style.color = "red";
        messageElement.style.display = "block";
        return;
    }

    // Valida as credenciais
    if (users[username] && users[username] === password) {
        messageElement.textContent = "Conectado com sucesso!";
        messageElement.style.color = "green";
        messageElement.style.display = "block";
        // Aqui você pode redirecionar para outra página após alguns segundos se necessário
        // setTimeout(() => window.location.href = "dashboard.html", 2000);
    } else {
        messageElement.textContent = "Informações inválidas.";
        messageElement.style.color = "red";
        messageElement.style.display = "block";
    }
});

// Função para lidar com a redefinição de senha
document.getElementById('resetForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const resetUsername = document.getElementById('resetUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const resetMessageElement = document.getElementById('reset-message');

    // Verifica se todos os campos estão preenchidos
    if (resetUsername === "" || newPassword === "" || confirmPassword === "") {
        resetMessageElement.textContent = "Por favor, preencha todos os campos.";
        resetMessageElement.style.color = "red";
        resetMessageElement.style.display = "block";
        return;
    }

    // Verifica se o usuário existe
    if (!users[resetUsername]) {
        resetMessageElement.textContent = "Usuário não encontrado.";
        resetMessageElement.style.color = "red";
        resetMessageElement.style.display = "block";
        return;
    }

    // Verifica se as senhas coincidem
    if (newPassword !== confirmPassword) {
        resetMessageElement.textContent = "As senhas não coincidem.";
        resetMessageElement.style.color = "red";
        resetMessageElement.style.display = "block";
        return;
    }

    // Atualiza a senha do usuário
    users[resetUsername] = newPassword;
    resetMessageElement.textContent = "Senha redefinida com sucesso!";
    resetMessageElement.style.color = "green";
    resetMessageElement.style.display = "block";

    // Limpa o formulário após a redefinição
    document.getElementById('resetForm').reset();

    // Opcional: voltar para a tela de login após alguns segundos
    setTimeout(() => {
        document.getElementById('resetBox').style.display = 'none'; // Oculta o formulário de redefinição
        document.getElementById('loginForm').style.display = 'block'; // Mostra o formulário de login
    }, 2000);
});

// Função para mostrar o formulário de redefinição de senha
document.getElementById('forgotPasswordLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').style.display = 'none'; // Oculta o formulário de login
    document.getElementById('resetBox').style.display = 'block'; // Mostra o formulário de redefinição
});

// Função para voltar ao formulário de login
document.getElementById('backToLoginLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('resetBox').style.display = 'none'; // Oculta o formulário de redefinição
    document.getElementById('loginForm').style.display = 'block'; // Mostra o formulário de login
});

// Função para criar um novo usuário
document.getElementById('createUserForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const email = document.getElementById('email').value;
    const policyCheck = document.getElementById('policyCheck').checked;
    const createMessageElement = document.getElementById('create-message');

    // Validação dos campos
    if (newUsername === "" || newPassword === "" || email === "" || !policyCheck) {
        createMessageElement.textContent = "Por favor, preencha todos os campos e aceite as políticas.";
        createMessageElement.style.color = "red";
        createMessageElement.style.display = "block";
        return;
    }

    // Verifica se o nome de usuário já existe
    if (users[newUsername]) {
        createMessageElement.textContent = "Nome de usuário já existe.";
        createMessageElement.style.color = "red";
        createMessageElement.style.display = "block";
        return;
    }

    // Adiciona o novo usuário ao objeto users
    users[newUsername] = newPassword;

    createMessageElement.textContent = "Usuário criado com sucesso!";
    createMessageElement.style.color = "green";
    createMessageElement.style.display = "block";

    // Limpa o formulário após a criação
    document.getElementById('createUserForm').reset();

    // Opcional: voltar para a tela de login após alguns segundos
    setTimeout(() => {
        document.getElementById('createUserBox').style.display = 'none'; // Oculta a criação de usuário
        document.getElementById('loginForm').style.display = 'block'; // Mostra o formulário de login
    }, 2000);
});

// Função para mostrar o formulário de criação de usuário
document.getElementById('createUserLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').style.display = 'none'; // Oculta o formulário de login
    document.getElementById('createUserBox').style.display = 'block'; // Mostra o formulário de criação de usuário
});

// Função para voltar ao formulário de login a partir da criação de usuário
document.getElementById('backToLoginLinkFromCreate').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('createUserBox').style.display = 'none'; // Oculta a criação de usuário
    document.getElementById('loginForm').style.display = 'block'; // Mostra o formulário de login
});
